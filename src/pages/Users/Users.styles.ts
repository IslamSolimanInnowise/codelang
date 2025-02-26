import { Pagination } from "@mui/material";
import styled from "styled-components";

export const PageMain = styled.main`
  height: 100%;
  text-align: center;
  display: flex;
`;

export const PageContent = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const UsersHeading = styled.h2`
  margin-bottom: 2rem;
`;

export const AllUsersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
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
