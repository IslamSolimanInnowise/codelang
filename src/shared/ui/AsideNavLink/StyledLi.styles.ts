import styled from "styled-components";

export const StyledLi = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 0;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    border: 1px solid black;
    scale: 1.1;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color};
  }
`;
