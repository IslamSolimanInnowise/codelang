import styled from "styled-components";

export const AccountDetailsSection = styled.section`
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.color};
  border-radius: 1rem;
`;

export const UserDetailsDiv = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;

  & > img {
    width: 10rem;
    background-color: #1976d2;
    border: 1px solid #1976d2;
    border-radius: 50%;
  }
`;

export const UserDataDiv = styled.div`
  width: 10rem;
  padding: 1rem 0;
  text-align: left;

  p {
    color: grey;
    margin-top: 0.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  & > img {
    width: 1rem;
    cursor: pointer;
  }
`;
