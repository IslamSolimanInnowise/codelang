import FormLink from "../../entities/FormLink/FormLink";
import { useAppSelector } from "../../shared/hooks";
import AuthForm from "../../widgets/AuthForm/AuthForm";
import { AuthContainer, AuthMain } from "./Auth.styles";

const AuthPage = () => {
  const { isRegistered } = useAppSelector((state) => state.auth);

  return (
    <AuthMain>
      <AuthContainer className="container">
        <AuthForm isRegistered={isRegistered} />
        <FormLink />
      </AuthContainer>
    </AuthMain>
  );
};
export default AuthPage;
