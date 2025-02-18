import ProfilePage from "@pages/Profile";
import Spinner from "@shared/ui/Spinner";
import useAuth from "@widgets/hooks/useAuth";
import { useEffect } from "react";

const onlyPublic = (Component: React.FC): React.FC => {
  return () => {
    const { user, onGetUser, isLoading } = useAuth();

    useEffect(() => {
      onGetUser();
    }, []);

    if (isLoading) {
      return <Spinner />;
    }

    if (!user) {
      return <Component />;
    }
    return <ProfilePage />;
  };
};

export default onlyPublic;
