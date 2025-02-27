import { Card } from "@mui/material";
import styled from "styled-components";

export const StyledCard = styled(Card)`
  && {
    padding: 1rem;
    text-align: left;
  }
`;

export const QuestionUserDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: yellow;
  margin: 1rem 0;
  padding: 1rem;
  background-color: whitesmoke;
  border-radius: 0.5rem;
`;

export const AnswersContainer = styled.div`
  margin-top: 1rem;
`;

export const AnswerDiv = styled.div`
  background-color: whitesmoke;
  padding: 0.5rem;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
`;
