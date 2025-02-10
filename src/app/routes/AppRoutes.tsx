import { Routes, Route } from "react-router";
import AppLayout from "../../shared/layout/AppLayout";
import HomePage from "../../pages/Home/Home";
import RegisterPage from "../../pages/Register/Register";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
