import PostCode from "@entities/ui/PostCode";
import PostFooter from "@entities/ui/PostFooter";
import PostHeader from "@entities/ui/PostHeader";
import { PostContainer } from "./Post.styles";

interface PostProps {
  code: string;
  language: string;
  creator: string;
  likes: number;
  dislikes: number;
  comments: number;
}

const Post: React.FC<PostProps> = ({
  code,
  language,
  creator,
  likes,
  dislikes,
  comments,
}) => {
  return (
    <PostContainer>
      <PostHeader creator={creator} language={language} />
      <PostCode code={code} language={language} />
      <PostFooter likes={likes} dislikes={dislikes} comments={comments} />
    </PostContainer>
  );
};
export default Post;
