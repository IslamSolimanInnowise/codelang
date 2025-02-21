import useSnippets from "@widgets/hooks/use-snippets";
import { PostContainer } from "./DetailedPost.styles";
import PostHeader from "@entities/ui/PostHeader";
import PostCode from "@entities/ui/PostCode";
import PostDetailedFooter from "@entities/ui/PostDetailedFooter";

interface DetailedPostProps {
  id: number;
  code: string;
  language: string;
  creator: string;
  likes: number;
  dislikes: number;
  comments: number;
}

const DetailedPost: React.FC<DetailedPostProps> = ({
  id,
  code,
  language,
  creator,
  likes,
  dislikes,
  comments,
}) => {
  const { postSnippetsMark, getUsersOneSnippet } = useSnippets();

  async function handleLike() {
    await postSnippetsMark({ id, mark: "like" });
    await getUsersOneSnippet(id);
  }

  async function handleDislike() {
    await postSnippetsMark({ id, mark: "dislike" });
    await getUsersOneSnippet(id);
  }

  return (
    <PostContainer>
      <PostHeader creator={creator} language={language} />
      <PostCode code={code} language={language} />
      <PostDetailedFooter
        onLike={handleLike}
        onDislike={handleDislike}
        likes={likes}
        dislikes={dislikes}
        comments={comments}
      />
    </PostContainer>
  );
};
export default DetailedPost;
