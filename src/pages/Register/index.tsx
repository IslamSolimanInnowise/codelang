import FormLink from "@entities/FormLink/FormLink";
import { AuthContainer, AuthMain } from "./Register.styles";
import RegisterForm from "@widgets/ui/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthMain>
      <AuthContainer className="container">
        <RegisterForm />
        <FormLink
          path="/login"
          buttonText="Login"
          paragraphText="Already have an account?"
        />
      </AuthContainer>
    </AuthMain>
  );
};
export default RegisterPage;
