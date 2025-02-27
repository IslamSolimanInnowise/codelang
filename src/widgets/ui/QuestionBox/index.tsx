import questionIMG from "@shared/assets/q.svg";
import eyeIMG from "@shared/assets/eye.svg";
import {
  EyeLogo,
  QuestionBoxContainer,
  QuestionDescription,
  QuestionLogo,
  QuestionLogoContainer,
} from "./QuestionBox.styles";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@shared/routes";

interface QuestionBoxProps {
  title: string;
  description: string;
  user: { username: string };
  id: number;
}

const QuestionBox: React.FC<QuestionBoxProps> = ({
  title,
  description,
  user: { username },
  id,
}) => {
  const navigate = useNavigate();

  const handleEyeClick = () => navigate(`${RoutesEnum.Questions}/${id}`);
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
      <EyeLogo src={eyeIMG} alt="eye image" onClick={handleEyeClick} />
    </QuestionBoxContainer>
  );
};
export default QuestionBox;
