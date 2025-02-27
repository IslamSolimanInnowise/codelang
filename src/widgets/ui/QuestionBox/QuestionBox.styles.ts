import styled from "styled-components";

export const QuestionBoxContainer = styled.div`
  background-color: #adaddf;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 10px 14px
    ${({ theme }) =>
      theme.color === "black"
        ? "rgba(0, 0, 0, 0.5)"
        : "rgba(255, 255, 255, 0.5)"};
  margin-top: 2rem;
`;

export const QuestionLogoContainer = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const QuestionLogo = styled.img`
  width: 2rem;
`;

export const QuestionDescription = styled.div`
  text-align: left;
  margin: 1rem 0 2rem;
`;

export const EyeLogo = styled.img`
  width: 1.5rem;
  display: block;
  cursor: pointer;
`;
