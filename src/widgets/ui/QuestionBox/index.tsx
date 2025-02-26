import questionIMG from "@shared/assets/q.svg";
import eyeIMG from "@shared/assets/eye.svg";
import {
  EyeLogo,
  QuestionBoxContainer,
  QuestionDescription,
  QuestionLogo,
  QuestionLogoContainer,
} from "./QuestionBox.styles";

interface QuestionBoxProps {
  title: string;
  description: string;
  user: { username: string };
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  title,
  description,
  user: { username },
}) => {
  return (
    <QuestionBoxContainer>
      <QuestionLogoContainer>
        <QuestionLogo src={questionIMG} alt="question image" />
        <div className="text">
          <h3>{title}</h3>
          <p>asked by user: {username}</p>
        </div>
      </QuestionLogoContainer>
      <QuestionDescription>{description}</QuestionDescription>
      <EyeLogo src={eyeIMG} alt="eye image" />
    </QuestionBoxContainer>
  );
};
export default QuestionBox;
