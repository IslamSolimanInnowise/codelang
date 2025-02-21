import styled from "styled-components";

export const PostHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color};
`;

export const PostCreator = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  img {
    width: 1rem;
  }
`;

export const PostLanguage = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  img {
    width: 1rem;
  }
`;
