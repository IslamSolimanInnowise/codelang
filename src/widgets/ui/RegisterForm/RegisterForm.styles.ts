import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 2rem;
  min-width: 20rem;
  max-width: 40rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border: 1px solid
    ${({ theme }) =>
      theme.backgroundColor === "black" ? "whitesmoke" : "black"};
`;
