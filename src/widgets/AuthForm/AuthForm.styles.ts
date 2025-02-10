import { TextField } from "@mui/material";
import styled from "styled-components";

const StyledForm = styled.form`
  width: 90%;
  padding: 2rem;
  max-width: 1000px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid
    ${({ theme }) =>
      theme.backgroundColor === "black" ? "whitesmoke" : "black"};
`;

const PasswordContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;

const StyledTextField = styled(TextField)`
  background-color: ${({ theme }) =>
    theme.backgroundColor === "black" ? "whitesmoke" : ""};
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;

  &.password-field {
    width: 100%;
  }
`;

export { StyledForm, PasswordContainer, StyledTextField };
