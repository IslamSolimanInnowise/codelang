import { Link } from "react-router";
import styled from "styled-components";

const StyledFormLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const StyledAuthLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export { StyledFormLink, StyledAuthLink };
