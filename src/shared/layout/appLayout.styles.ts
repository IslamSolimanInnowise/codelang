import { NavLink } from "react-router";
import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  box-shadow: ${({ theme }) =>
    theme.backgroundColor === "black"
      ? "0 2px 4px rgba(255, 255, 255, 0.2)"
      : "0 2px 4px rgba(0, 0, 0, 0.2)"};
`;

const StyledHeading1 = styled.h1`
  color: grey;
`;

const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: grey;
  transition: 0.3s;
  border: 1px solid
    ${({ theme }) => (theme.backgroundColor === "black" ? "white" : "black")};
  border-radius: 1rem;
  padding: 0.5rem;
`;

export { StyledHeader, StyledHeading1, StyledNavList, StyledNavLink };
