import useAuth from "@widgets/hooks/use-auth";
import { useForm } from "react-hook-form";
import { defaultValues, newPasswordSchema, NewPasswordSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@shared/ui/Input/Input";
import { Button } from "@mui/material";
import { StyledForm } from "./NewPasswordForm.styles";

const NewPasswordForm: React.FC = () => {
  const { onUpdatePassword, onGetUser } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewPasswordSchema>({
    mode: "all",
    resolver: zodResolver(newPasswordSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    await onUpdatePassword(data);
    await onGetUser();
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <h3>Change your password:</h3>
      <Input
        {...register("oldPassword")}
        label="Old password"
        placeholder="Enter your old password"
        type="password"
        variant="outlined"
        error={Boolean(errors.oldPassword)}
        helperText={errors.oldPassword?.message}
      />
      <Input
        {...register("newPassword")}
        label="New password"
        placeholder="Enter your new password"
        type="password"
        variant="outlined"
        error={Boolean(errors.oldPassword)}
        helperText={errors.oldPassword?.message}
      />
      <Input
        {...register("confirmPassword")}
        label="Confirm password"
        placeholder="Enter your new password again"
        type="password"
        variant="outlined"
        error={Boolean(errors.oldPassword)}
        helperText={errors.oldPassword?.message}
      />
      <Button variant="contained" type="submit">
        Change Password
      </Button>
    </StyledForm>
  );
};
export default NewPasswordForm;
