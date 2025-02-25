import styled from "styled-components";

export const PostFooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-top: 1px solid ${({ theme }) => theme.color};
`;

export const PostMarks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const PostLikes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const PostDislikes = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`;

export const PostComments = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-right: 1rem;
  cursor: pointer;
`;
