import { loginUser, registerUser } from "@features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@shared/hooks";
import { LoginSchema } from "@widgets/ui/LoginForm/schema";
import { RegisterSchema } from "@widgets/ui/RegisterForm/schema";
import { useNavigate } from "react-router";

const useAuth = () => {
  const { error, isLoading, isLoggedIn, isRegistered } = useAppSelector(
    (state) => state.auth
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLoginSubmit = async (data: LoginSchema) => {
    // console.log("Login Submitted!");
    await dispatch(loginUser(data));

    if (!error) {
      navigate("/");
    }
  };

  const onRegisterSubmit = async (data: RegisterSchema) => {
    // console.log("Registeration Completed!");
    await dispatch(registerUser(data));

    if (!error) {
      navigate("/login");
    }
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
