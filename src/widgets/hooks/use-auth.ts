import {
  deleteUser,
  getUser,
  loginUser,
  logoutUser,
  registerUser,
  updatePassword,
  updateUserInfo,
} from "@features/auth/auth.thunks";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { useCallback } from "react";

const useAuth = () => {
  const authStore = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const onLoginSubmit = useCallback(
    (...data: Parameters<typeof loginUser>) => {
      return dispatch(loginUser(...data));
    },
    [dispatch]
  );

  const onRegisterSubmit = useCallback(
    (...data: Parameters<typeof registerUser>) => {
      return dispatch(registerUser(...data));
    },
    [dispatch]
  );

  const onGetUser = useCallback(() => dispatch(getUser()), [dispatch]);

  const onLogoutSubmit = useCallback(() => dispatch(logoutUser()), [dispatch]);

  const onUpdateUsername = useCallback(
    (...data: Parameters<typeof updateUserInfo>) => {
      return dispatch(updateUserInfo(...data));
    },
    [dispatch]
  );

  const onUpdatePassword = useCallback(
    (...data: Parameters<typeof updatePassword>) => {
      return dispatch(updatePassword(...data));
    },
    [dispatch]
  );

  const onDeleteUser = useCallback(() => dispatch(deleteUser()), [dispatch]);

  return {
    ...authStore,
    onLoginSubmit,
    onRegisterSubmit,
    onGetUser,
    onLogoutSubmit,
    onUpdateUsername,
    onUpdatePassword,
    onDeleteUser,
  };
};

export default useAuth;
