import { Button } from "@mui/material";
import { useLocation } from "react-router";
import { StyledFormLink } from "./FormLink.styles";

const FormLink: React.FC = () => {
  const path = useLocation().pathname.split("/").pop();

  return (
    <StyledFormLink>
      <p>
        {path === "register"
          ? `Already have an account?`
          : `Don't have an account yet?`}
      </p>
      <Button>{path === "register" ? "Sign in" : "Register"}</Button>
    </StyledFormLink>
  );
};
export default FormLink;
