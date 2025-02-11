import FormLink from "@entities/FormLink/FormLink";
import { AuthContainer, AuthMain } from "./Register.styles";
import RegisterForm from "@widgets/ui/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthMain>
      <AuthContainer className="container">
        <RegisterForm />
        <FormLink />
      </AuthContainer>
    </AuthMain>
  );
};
export default RegisterPage;
