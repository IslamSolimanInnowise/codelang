import { Pagination } from "@mui/material";
import styled from "styled-components";

export const ProfileMain = styled.main`
  height: 100%;
  text-align: center;
  display: grid;
  grid-template-columns: 15rem 1fr;
  gap: 1rem;
`;

export const PageContent = styled.div`
  padding: 1rem;
`;

export const ProfileHeading = styled.h2`
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
  display: flex;
  justify-content: center;
  background-color: whitesmoke;
  padding: 1rem 2rem;
  border-radius: 1rem;
`;
