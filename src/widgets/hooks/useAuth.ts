import { loginUser, registerUser } from "@features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { LoginSchema } from "@widgets/ui/LoginForm/schema";
import { RegisterSchema } from "@widgets/ui/RegisterForm/schema";

const useAuth = () => {
  const { error, isLoading, isLoggedIn, isRegistered } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();

  const onLoginSubmit = (data: LoginSchema) => {
    dispatch(loginUser(data));
  };

  const onRegisterSubmit = (data: RegisterSchema) => {
    dispatch(registerUser(data));
  };

  return {
    error,
    isLoading,
    isLoggedIn,
    isRegistered,
    onLoginSubmit,
    onRegisterSubmit,
  };
};

export default useAuth;
