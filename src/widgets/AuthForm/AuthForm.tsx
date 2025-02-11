import { Button } from "@mui/material";
import {
  PasswordContainer,
  StyledForm,
  StyledTextField,
} from "./AuthForm.styles";
import { useLocation } from "react-router";

interface AuthFormProps {
  isRegistered: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegistered }) => {
  const path = useLocation().pathname.split("/").pop();

  return (
    <StyledForm>
      <StyledTextField
        label="Username"
        placeholder="Enter your username"
        type="text"
        variant="filled"
        name="username"
        required
      />
      <PasswordContainer>
        <StyledTextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="filled"
          name="password"
          required
          className="password-field"
        />
        {!isRegistered && (
          <StyledTextField
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            variant="filled"
            name="confirmPassword"
            required
            className="password-field"
          />
        )}
      </PasswordContainer>
      <Button variant="contained">
        {path === "register" ? "Register" : "Sign in"}
      </Button>
    </StyledForm>
  );
};
export default AuthForm;
