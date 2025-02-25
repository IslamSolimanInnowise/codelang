import { Pagination } from "@mui/material";
import styled from "styled-components";

export const MySnippetsMain = styled.main`
  height: 100%;
  text-align: center;
  display: flex;
  gap: 1rem;
`;

export const PageContent = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const MySnippetsHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const StyledPagination = styled(Pagination)`
  width: 300px;
  margin: 3rem auto;
`;
