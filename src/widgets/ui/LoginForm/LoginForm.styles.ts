import styled from "styled-components";

const StyledForm = styled.form`
  width: 90%;
  padding: 2rem;
  min-width: 300px;
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

export { StyledForm, PasswordContainer };
