import FormLink from "../../entities/FormLink/FormLink";
import { useAppSelector } from "../../shared/hooks";
import AuthForm from "../../widgets/AuthForm/AuthForm";
import { LoginContainer, LoginMain } from "./Login.styles";

const LoginPage = () => {
  const { isRegistered } = useAppSelector((state) => state.auth);

  return (
    <LoginMain>
      <LoginContainer className="container">
        <AuthForm isRegistered={isRegistered} />
        <FormLink />
      </LoginContainer>
    </LoginMain>
  );
};
export default LoginPage;
