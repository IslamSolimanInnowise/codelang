import { Routes, Route } from "react-router";
import AppLayout from "../../shared/layout/AppLayout";
import HomePage from "../../pages/Home/Home";
import AuthPage from "../../pages/Auth/Auth";
import { useAppSelector } from "../../shared/hooks";

const AppRoutes: React.FC = () => {
  const { isRegistered } = useAppSelector((state) => state.auth);

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        {!isRegistered && <Route path="/register" element={<AuthPage />} />}
        <Route path="/login" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
