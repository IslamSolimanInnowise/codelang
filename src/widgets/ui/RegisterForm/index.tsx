import { Button } from "@mui/material";
import { StyledForm } from "./RegisterForm.styles";
import Input from "@shared/ui/Input/Input";
import { useForm } from "react-hook-form";
import { defaultValues, registerFormSchema, RegisterSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import useAuth from "@widgets/hooks/useAuth";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@shared/routes";

const RegisterForm: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterSchema>({
    mode: "all",
    resolver: zodResolver(registerFormSchema),
    defaultValues,
  });

  const {
    authStore: { isLoading, error },
    onRegisterSubmit,
  } = useAuth();

  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await onRegisterSubmit(data).unwrap();
    navigate(RoutesEnum.Login);
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

      <Input
        {...register("confirmPassword")}
        label="Confirm Password"
        placeholder="Confirm your password"
        type="password"
        variant="filled"
        className="password-field"
        error={Boolean(errors.confirmPassword)}
        helperText={errors.confirmPassword?.message}
      />
      <Button variant="contained" type="submit" disabled={isLoading}>
        {isLoading ? "Registering..." : "Register"}
      </Button>
      {error && <div>{error}</div>}
    </StyledForm>
  );
};

export default RegisterForm;
