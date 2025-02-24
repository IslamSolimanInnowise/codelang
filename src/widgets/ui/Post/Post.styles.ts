import styled from "styled-components";

export const PostContainer = styled.div`
  border: 1px solid ${(theme) => theme.color};
  border-radius: 1rem;
  width: 30rem;
`;

export const PostsButtonsContainer = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: whitesmoke;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;
