import { useAppSelector } from "../../shared/hooks";
import AuthForm from "../../widgets/AuthForm/AuthForm";
import { RegsiterMain } from "./Register.styles";

const RegisterPage = () => {
  const { isRegistered } = useAppSelector((state) => state.auth);

  return (
    <RegsiterMain>
      <AuthForm isRegistered={isRegistered} />
    </RegsiterMain>
  );
};
export default RegisterPage;
