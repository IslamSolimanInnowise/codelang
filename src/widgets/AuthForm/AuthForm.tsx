import { useLocation } from "react-router";
import { Button } from "@mui/material";
import {
  PasswordContainer,
  StyledForm,
  StyledTextField,
} from "./AuthForm.styles";

const AuthForm: React.FC = () => {
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
        {path === "register" && (
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
