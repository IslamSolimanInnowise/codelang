import useAuth from "@widgets/hooks/use-auth";
import { CommentButtons, CommentContainer } from "./Comment.styles";
import { Button } from "@mui/material";
import useSnippets from "@widgets/hooks/use-snippets";
import UpdateCommentModal from "../UpdateCommentModal";

interface CommentProps {
  content: string;
  user: { username: string };
  id: number;
}

const Comment: React.FC<CommentProps> = ({ content, user, id }) => {
  const { user: authUser } = useAuth();
  const { removeComment, openDialog, closeDialog, getSnippet, snippet, modal } =
    useSnippets();

  const deleteComment = async () => {
    await removeComment(id);
    await getSnippet(snippet!.id);
  };

  return (
    <CommentContainer>
      <h4>{user.username}</h4>
      <p>{content}</p>
      {authUser!.username === user.username && (
        <CommentButtons>
          <Button variant="contained" onClick={openDialog}>
            Update
          </Button>
          <Button variant="contained" onClick={deleteComment}>
            Delete
          </Button>
        </CommentButtons>
      )}
      <UpdateCommentModal
        open={modal.isOpen}
        onClose={closeDialog}
        commentId={id}
      />
    </CommentContainer>
  );
};
export default Comment;
