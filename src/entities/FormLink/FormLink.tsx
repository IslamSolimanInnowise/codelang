import { Button } from "@mui/material";
import { useLocation } from "react-router";
import { StyledAuthLink, StyledFormLink } from "./FormLink.styles";

const FormLink: React.FC = () => {
  const path = useLocation().pathname.split("/").pop();

  return (
    <StyledFormLink>
      <p>
        {path === "register"
          ? `Already have an account?`
          : `Don't have an account yet?`}
      </p>
      <Button>
        {path === "register" ? (
          <StyledAuthLink to="/login">Sign in</StyledAuthLink>
        ) : (
          <StyledAuthLink to="/register">Register</StyledAuthLink>
        )}
      </Button>
    </StyledFormLink>
  );
};
export default FormLink;
