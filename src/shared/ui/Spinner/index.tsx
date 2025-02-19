import { CircularProgress } from "@mui/material";
import { StyledBox } from "./Spinner.styles";

const Spinner: React.FC = () => {
  return (
    <StyledBox>
      <CircularProgress />
    </StyledBox>
  );
};
export default Spinner;
