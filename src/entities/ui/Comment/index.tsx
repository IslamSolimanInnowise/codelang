import { CommentContainer } from "./Comment.styles";

interface CommentProps {
  content: string;
  user: { username: string };
}
const Comment: React.FC<CommentProps> = ({ content, user }) => {
  return (
    <CommentContainer>
      <h4>{user.username}</h4>
      <p>{content}</p>
    </CommentContainer>
  );
};
export default Comment;
