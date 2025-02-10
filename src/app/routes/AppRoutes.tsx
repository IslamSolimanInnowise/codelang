import { Routes, Route } from "react-router";
import AppLayout from "../../shared/layout/AppLayout";
import HomePage from "../../pages/Home/Home";
import RegisterPage from "../../pages/Register/Register";
import LoginPage from "../../pages/Login/Login";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
