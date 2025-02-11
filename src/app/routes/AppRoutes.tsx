import { Routes, Route } from "react-router";
import AppLayout from "../../shared/layout/AppLayout";
import HomePage from "../../pages/Home/Home";
import AuthPage from "../../pages/Auth/Auth";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/login" element={<AuthPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
