import styled from "styled-components";

export const AuthMain = styled.main`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  & > a {
    color: #1976d2;

    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 1px solid
      ${({ theme }) =>
        theme.backgroundColor === "black" ? "whitesmoke" : "black"};
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      background-color: #1976d2;
      color: whitesmoke;
      border-color: ${({ theme }) =>
        theme.backgroundColor === "black" ? "black" : "whitesmoke"};
    }
  }
`;
