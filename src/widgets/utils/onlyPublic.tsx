import { RoutesEnum } from "@shared/routes";
import Spinner from "@shared/ui/Spinner";
import useAuth from "@widgets/hooks/use-auth";
import { useEffect } from "react";
import { Navigate } from "react-router";

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

    return <Navigate to={RoutesEnum.Profile} />;
  };
};

export default onlyPublic;
