import { Button } from "@mui/material";
import { StyledForm } from "./LoginForm.styles";
import Input from "@shared/ui/Input/Input";
import { useForm } from "react-hook-form";
import { defaultValues, loginFormSchema, LoginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "@widgets/hooks/useAuth";
import { RoutesEnum } from "@shared/routes";
import { useNavigate } from "react-router";

const LoginForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginSchema>({
    mode: "all",
    resolver: zodResolver(loginFormSchema),
    defaultValues,
  });

  const navigate = useNavigate();

  const { onLoginSubmit, onGetUser, isLoading, error } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    await onLoginSubmit(data).unwrap();
    await onGetUser().unwrap();
    navigate(RoutesEnum.Home);
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <Input
        {...register("username")}
        label="Username"
        placeholder="Enter your username"
        type="text"
        variant="filled"
        error={Boolean(errors.username)}
        helperText={errors.username?.message}
      />
      <Input
        {...register("password")}
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="filled"
        className="password-field"
        error={Boolean(errors.password)}
        helperText={errors.password?.message}
      />
      <Button variant="contained" type="submit" disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>
      {error && <div>{error}</div>}
    </StyledForm>
  );
};

export default LoginForm;
