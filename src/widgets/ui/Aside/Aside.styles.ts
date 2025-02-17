import styled from "styled-components";

export const StyledAside = styled.aside`
  height: 100%;
  background-color: #1976d2;
  padding: 1rem;
  width: 15rem;

  .person {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
  }

  & img {
    width: 1rem;
  }
`;
