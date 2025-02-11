import { Button } from "@mui/material";
import { StyledAuthLink, StyledFormLink } from "./FormLink.styles";

interface FormLinkProps {
  paragraphText: string;
  buttonText: string;
  path: string;
}

const FormLink: React.FC<FormLinkProps> = ({
  buttonText,
  paragraphText,
  path,
}) => {
  return (
    <StyledFormLink>
      {/* <p>
        {path === "register"
          ? `Already have an account?`
          : `Don't have an account yet?`}
      </p> */}
      <p>{paragraphText}</p>
      <Button>
        <StyledAuthLink to={path}>{buttonText}</StyledAuthLink>
      </Button>
    </StyledFormLink>
  );
};
export default FormLink;
