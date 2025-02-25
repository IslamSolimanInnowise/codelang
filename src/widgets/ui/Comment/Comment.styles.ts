import styled from "styled-components";

export const CommentContainer = styled.div`
  background-color: whitesmoke;
  border: 1px solid #1976d2;
  width: 90%;
  border-radius: 4px;
  max-width: 40rem;
  margin: auto;
  word-wrap: break-word;
  text-align: left;
  padding: 0.5rem 1rem;
  transition: 0.3s;
  color: black;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
  }
`;

export const CommentButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
