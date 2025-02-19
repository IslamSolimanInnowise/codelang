import { useForm } from "react-hook-form";
import { defaultValues, newUsernameSchema, NewUsernameSchema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "@shared/ui/Input/Input";
import { Button } from "@mui/material";
import useAuth from "@widgets/hooks/useAuth";
import { StyledForm } from "./NewUsernameForm.styles";

const NewUsernameForm = () => {
  const { error, onUpdateUsername, onGetUser } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NewUsernameSchema>({
    mode: "all",
    resolver: zodResolver(newUsernameSchema),
    defaultValues,
  });

  const onSubmit = handleSubmit(async (data) => {
    await onUpdateUsername(data);
    await onGetUser();
  });

  return (
    <StyledForm onSubmit={onSubmit}>
      <h3>Change your username:</h3>
      <Input
        {...register("username")}
        label="Update Username"
        placeholder="Enter your new username"
        type="text"
        variant="outlined"
        error={Boolean(errors.username)}
        helperText={errors.username?.message}
      />
      <Button variant="contained" type="submit">
        Save
      </Button>
      {error && <div>{error}</div>}
    </StyledForm>
  );
};
export default NewUsernameForm;
