import { AuthMain } from "./Login.styles";
import LoginForm from "@widgets/ui/LoginForm";
import { Link } from "react-router";
import { RoutesEnum } from "@shared/routes";
import onlyPublic from "@widgets/utils/onlyPublic";

const LoginPage: React.FC = () => {
  return (
    <AuthMain>
      <LoginForm />
      <p>Don't have an account yet?</p>
      <Link to={RoutesEnum.Register}>Register</Link>
    </AuthMain>
  );
};
export default onlyPublic(LoginPage);
