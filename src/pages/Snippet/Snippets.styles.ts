import styled from "styled-components";

export const SnippetMain = styled.main`
  height: 100%;
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 1rem;
`;

export const PageContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const PostsContainer = styled.div`
  width: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const AllPostComments = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
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
