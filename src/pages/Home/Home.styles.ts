import { Pagination } from "@mui/material";
import styled from "styled-components";

export const HomeMain = styled.main`
  margin-top: 4rem;
  padding: 1rem;
  text-align: center;
`;

export const HomeHeading = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`;

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const StyledHomePagination = styled(Pagination)`
  width: 300px;
  margin: 3rem auto;
`;
