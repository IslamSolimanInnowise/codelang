import accountIMG from "@shared/assets/blueaccount.svg";
import codeIMG from "@shared/assets/code.svg";
import {
  PostCreator,
  PostHeaderContainer,
  PostLanguage,
} from "./PostHeader.styles";

interface PostHeaderProps {
  creator: string;
  language: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ creator, language }) => {
  return (
    <PostHeaderContainer>
      <PostCreator>
        <img src={accountIMG} alt={creator} />
        <span>{creator}</span>
      </PostCreator>
      <PostLanguage>
        <img src={codeIMG} alt={language} />
        <span>{language}</span>
      </PostLanguage>
    </PostHeaderContainer>
  );
};
export default PostHeader;
