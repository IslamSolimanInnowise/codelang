import { RoutesEnum } from "@shared/routes";
import Spinner from "@shared/ui/Spinner";
import useAuth from "@widgets/hooks/useAuth";
import { useEffect } from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRouter: React.FC = () => {
  const { user, onGetUser, isLoading } = useAuth();

  useEffect(() => {
    onGetUser();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to={RoutesEnum.Login} />;
  }
};
export default PrivateRouter;
