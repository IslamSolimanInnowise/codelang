import styled from "styled-components";

const AuthMain = styled.main`
  min-height: calc(100vh - 4rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;

export { AuthContainer, AuthMain };
