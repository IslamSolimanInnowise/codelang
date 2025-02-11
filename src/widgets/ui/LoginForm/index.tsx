import { Button } from "@mui/material";
import {
  PasswordContainer,
  StyledForm,
  StyledTextField,
} from "./LoginForm.styles";

const LoginForm: React.FC = () => {
  return (
    <StyledForm>
      <StyledTextField
        label="Username"
        placeholder="Enter your username"
        type="text"
        variant="filled"
        name="username"
        required
        slotProps={{
          htmlInput: { minLength: 5 },
        }}
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
          slotProps={{
            htmlInput: {
              pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z0-9]).+$",
              title:
                "Password must contain at least one lowercase letter, one uppercase letter, one number and one symbol!",
            },
          }}
        />
      </PasswordContainer>
      <Button variant="contained" type="submit">
        Register
      </Button>
    </StyledForm>
  );
};

export default LoginForm;
