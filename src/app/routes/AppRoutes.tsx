import HomePage from "@pages/Home/Home";
import LoginPage from "@pages/Login";
import RegisterPage from "@pages/Register";
import { useAppSelector } from "@shared/hooks";
import AppLayout from "@shared/layout/AppLayout";
import { RoutesEnum } from "@shared/routes";
import { Routes, Route } from "react-router";

const AppRoutes: React.FC = () => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={RoutesEnum.Home} element={<HomePage />} />
        {!isLoggedIn && (
          <Route path={RoutesEnum.Register} element={<RegisterPage />} />
        )}
        <Route path={RoutesEnum.Login} element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
