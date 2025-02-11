import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  background-color: ${({ theme }) =>
    theme.backgroundColor === "black" ? "whitesmoke" : ""};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;

  &.password-field {
    width: 100%;
  }
`;
