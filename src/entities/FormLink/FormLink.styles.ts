import { Link } from "react-router";
import styled from "styled-components";

export const StyledFormLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const StyledAuthLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
