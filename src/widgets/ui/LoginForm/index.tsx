import { Button } from "@mui/material";
import { StyledForm } from "./LoginForm.styles";
import Input from "@shared/ui/Input/Input";
import { useForm } from "react-hook-form";
import { defaultValues, loginFormSchema, LoginSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";

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

  const onSubmit = () => {
    // console.log("Login Submitted!");
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
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
      <Button variant="contained" type="submit">
        Login
      </Button>
    </StyledForm>
  );
};

export default LoginForm;
