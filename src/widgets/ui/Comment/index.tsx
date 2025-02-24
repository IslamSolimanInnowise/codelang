import useAuth from "@widgets/hooks/use-auth";
import { CommentButtons, CommentContainer } from "./Comment.styles";
import { Button } from "@mui/material";
import useSnippets from "@widgets/hooks/use-snippets";

interface CommentProps {
  content: string;
  user: { username: string };
  id: number;
  updateComment?: () => void;
}
const Comment: React.FC<CommentProps> = ({ content, user, id }) => {
  const authState = useAuth();
  const { removeComment, openCommentDialog, getUsersOneSnippet, snippet } =
    useSnippets();

  const deleteComment = async () => {
    await removeComment(id);
    await getUsersOneSnippet(snippet!.id);
  };

  return (
    <CommentContainer>
      <h4>{user.username}</h4>
      <p>{content}</p>
      {authState.user!.username === user.username && (
        <CommentButtons>
          <Button variant="contained" onClick={openCommentDialog}>
            Update
          </Button>
          <Button variant="contained" onClick={deleteComment}>
            Delete
          </Button>
        </CommentButtons>
      )}
    </CommentContainer>
  );
};
export default Comment;
