import { getUser, loginUser, registerUser } from "@features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { LoginSchema } from "@widgets/ui/LoginForm/schema";
import { RegisterSchema } from "@widgets/ui/RegisterForm/schema";
import { useCallback } from "react";

const useAuth = () => {
  const authStore = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onLoginSubmit = useCallback(
    (data: LoginSchema) => {
      return dispatch(loginUser(data));
    },
    [dispatch]
  );

  const onRegisterSubmit = useCallback(
    (data: RegisterSchema) => {
      return dispatch(registerUser(data));
    },
    [dispatch]
  );

  const onGetUser = useCallback(() => dispatch(getUser()), [dispatch]);

  return {
    ...authStore,
    onLoginSubmit,
    onRegisterSubmit,
    onGetUser,
  };
};

export default useAuth;
