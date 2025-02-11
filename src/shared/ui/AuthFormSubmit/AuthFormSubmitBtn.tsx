import { Button } from "@mui/material";
import { useLocation } from "react-router";
import { StyledAuthLink } from "./AuthFormSubmitBtn.styles";

const AuthFormSubmitBtn: React.FC = () => {
  const path = useLocation().pathname.split("/").pop();

  return (
    <Button>
      {path === "register" ? (
        <StyledAuthLink to="/login">Sign in</StyledAuthLink>
      ) : (
        <StyledAuthLink to="/register">Register</StyledAuthLink>
      )}
    </Button>
  );
};
export default AuthFormSubmitBtn;
