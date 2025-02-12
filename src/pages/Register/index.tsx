import { AuthMain } from "./Register.styles";
import RegisterForm from "@widgets/ui/RegisterForm";
import { RoutesEnum } from "@shared/routes";
import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <AuthMain>
      <RegisterForm />
      <p>Already have an account?</p>
      <Link to={RoutesEnum.Login}>Login</Link>
    </AuthMain>
  );
};
export default RegisterPage;
