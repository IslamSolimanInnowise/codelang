import PostCode from "@entities/ui/PostCode";
import PostFooter from "@entities/ui/PostFooter";
import PostHeader from "@entities/ui/PostHeader";
import { PostContainer } from "./Post.styles";
import useSnippets from "@widgets/hooks/useSnippets";

interface PostProps {
  id: number;
  code: string;
  language: string;
  creator: string;
  likes: number;
  dislikes: number;
  comments: number;
}

const Post: React.FC<PostProps> = ({
  id,
  code,
  language,
  creator,
  likes,
  dislikes,
  comments,
}) => {
  const { postSnippetsMark, getUsersSnippets } = useSnippets();

  async function handleLike() {
    await postSnippetsMark({ id, mark: "like" });
    await getUsersSnippets();
  }

  async function handleDislike() {
    await postSnippetsMark({ id, mark: "dislike" });
    await getUsersSnippets();
  }

  return (
    <PostContainer>
      <PostHeader creator={creator} language={language} />
      <PostCode code={code} language={language} />
      <PostFooter
        likes={likes}
        dislikes={dislikes}
        comments={comments}
        onLike={handleLike}
        onDislike={handleDislike}
      />
    </PostContainer>
  );
};
export default Post;
