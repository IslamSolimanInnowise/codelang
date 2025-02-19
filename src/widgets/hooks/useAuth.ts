import {
  getUser,
  loginUser,
  logoutUser,
  registerUser,
  updateUsername,
} from "@features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { LoginSchema } from "@widgets/ui/LoginForm/schema";
import { NewUsernameSchema } from "@widgets/ui/NewUsernameForm/schema";
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

  const onLogoutSubmit = useCallback(() => dispatch(logoutUser()), [dispatch]);

  const onUpdateUsername = useCallback(
    (data: NewUsernameSchema) => {
      return dispatch(updateUsername(data));
    },
    [dispatch]
  );

  return {
    ...authStore,
    onLoginSubmit,
    onRegisterSubmit,
    onGetUser,
    onLogoutSubmit,
    onUpdateUsername,
  };
};

export default useAuth;
