import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 2rem;
  min-width: 20rem;
  width: 30rem;
  max-width: 40rem;
  height: 12rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  border: 1px solid
    ${({ theme }) =>
      theme.backgroundColor === "black" ? "whitesmoke" : "black"};

  & > div:last-child {
    text-align: center;
  }
`;
