import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 0 2rem;
  min-width: 20rem;
  width: 30rem;
  max-width: 40rem;
  height: 25rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  border: 1px solid
    ${({ theme }) =>
      theme.backgroundColor === "black" ? "whitesmoke" : "black"};

  & > div:last-child {
    text-align: center;
  }
`;
