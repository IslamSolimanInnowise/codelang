import styled from "styled-components";

export const StyledForm = styled.form`
  padding: 2rem;
  width: 50%;
  max-width: 40rem;
  height: 100%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  border: 1px solid
    ${({ theme }) =>
      theme.backgroundColor === "black" ? "whitesmoke" : "black"};

  h3 {
    text-align: left;
    margin-bottom: 1rem;
  }

  & > div:last-child {
    text-align: center;
  }
`;
