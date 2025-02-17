import HomePage from "@pages/Home/Home";
import LoginPage from "@pages/Login";
import ProfilePage from "@pages/Profile";
import RegisterPage from "@pages/Register";
import AppLayout from "@shared/layout/AppLayout";
import { RoutesEnum } from "@shared/routes";
import useAuth from "@widgets/hooks/useAuth";
import { Routes, Route } from "react-router";

const AppRoutes: React.FC = () => {
  const { user } = useAuth();
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route
          path={RoutesEnum.Home}
          element={user.id ? <ProfilePage /> : <HomePage />}
        />
        <Route
          path={RoutesEnum.Register}
          element={user.id ? <HomePage /> : <RegisterPage />}
        />
        <Route
          path={RoutesEnum.Login}
          element={user.id ? <HomePage /> : <LoginPage />}
        />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
