import FormLink from "../../entities/FormLink/FormLink";
import { useAppSelector } from "../../shared/hooks";
import AuthForm from "../../widgets/AuthForm/AuthForm";
import { RegisterContainer, RegsiterMain } from "./Register.styles";

const RegisterPage = () => {
  const { isRegistered } = useAppSelector((state) => state.auth);

  return (
    <RegsiterMain>
      <RegisterContainer className="container">
        <AuthForm isRegistered={isRegistered} />
        <FormLink />
      </RegisterContainer>
    </RegsiterMain>
  );
};
export default RegisterPage;
