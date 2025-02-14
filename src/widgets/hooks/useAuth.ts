import { loginUser, registerUser } from "@features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { LoginSchema } from "@widgets/ui/LoginForm/schema";
import { RegisterSchema } from "@widgets/ui/RegisterForm/schema";

const useAuth = () => {
  const authStore = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onLoginSubmit = (data: LoginSchema) => {
    return dispatch(loginUser(data));
  };

  const onRegisterSubmit = (data: RegisterSchema) => {
    return dispatch(registerUser(data));
  };

  return {
    authStore,
    onLoginSubmit,
    onRegisterSubmit,
  };
};

export default useAuth;
