import FormLink from "@entities/FormLink/FormLink";
import { AuthContainer, AuthMain } from "./Login.styles";
import LoginForm from "@widgets/ui/LoginForm";

const LoginPage = () => {
  return (
    <AuthMain>
      <AuthContainer className="container">
        <LoginForm />
        <FormLink
          path="/register"
          buttonText="Register"
          paragraphText="Don't have an account yet?"
        />
      </AuthContainer>
    </AuthMain>
  );
};
export default LoginPage;
