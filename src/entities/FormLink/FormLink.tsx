import { useLocation } from "react-router";
import { StyledFormLink } from "./FormLink.styles";
import AuthFormSubmitBtn from "@shared/ui/AuthFormSubmit/AuthFormSubmitBtn";

const FormLink: React.FC = () => {
  const path = useLocation().pathname.split("/").pop();

  return (
    <StyledFormLink>
      <p>
        {path === "register"
          ? `Already have an account?`
          : `Don't have an account yet?`}
      </p>
      <AuthFormSubmitBtn />
    </StyledFormLink>
  );
};
export default FormLink;
