import {
  PasswordContainer,
  StyledForm,
  StyledTextField,
} from "./AuthForm.styles";

interface AuthFormProps {
  isRegistered: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isRegistered }) => {
  return (
    <StyledForm>
      <StyledTextField
        label="Username"
        placeholder="Enter your username"
        type="text"
        variant="filled"
        required
      />
      <PasswordContainer>
        <StyledTextField
          label="Password"
          placeholder="Enter your password"
          type="password"
          variant="filled"
          required
          className="password-field"
        />
        {!isRegistered && (
          <StyledTextField
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            variant="filled"
            required
            className="password-field"
          />
        )}
      </PasswordContainer>
    </StyledForm>
  );
};
export default AuthForm;
