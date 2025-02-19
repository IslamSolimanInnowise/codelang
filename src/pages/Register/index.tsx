import { AuthMain } from "./Register.styles";
import RegisterForm from "@widgets/ui/RegisterForm";
import { RoutesEnum } from "@shared/routes";
import { Link } from "react-router";
import onlyPublic from "@widgets/utils/onlyPublic";

const RegisterPage: React.FC = () => {
  return (
    <AuthMain>
      <RegisterForm />
      <p>Already have an account?</p>
      <Link to={RoutesEnum.Login}>Login</Link>
    </AuthMain>
  );
};
export default onlyPublic(RegisterPage);
