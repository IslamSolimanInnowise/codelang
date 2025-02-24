import PostCode from "@entities/ui/PostCode";
import PostFooter from "@entities/ui/PostFooter";
import PostHeader from "@entities/ui/PostHeader";
import { PostContainer, PostsButtonsContainer } from "./Post.styles";
import useSnippets from "@widgets/hooks/use-snippets";
import { useNavigate } from "react-router";
import { RoutesEnum } from "@shared/routes";
import useAuth from "@widgets/hooks/use-auth";
import { Button } from "@mui/material";
import UpdatePostModal from "../UpdatePostModal";

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
  const {
    postSnippetsMark,
    getUsersOneSnippet,
    getUsersSnippets,
    getMyPosts,
    removeSnippet,
    openDialog,
    closeDialog,
    modal,
  } = useSnippets();
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleLike() {
    await postSnippetsMark({ id, mark: "like" });

    if (user?.username === creator) {
      await getMyPosts(user.id);
      return;
    }

    await getUsersSnippets();
  }

  async function handleDislike() {
    await postSnippetsMark({ id, mark: "dislike" });

    if (user?.username === creator) {
      await getMyPosts(user.id);
      return;
    }

    await getUsersSnippets();
  }

  async function handleCommentClick() {
    await getUsersOneSnippet(id);
    navigate(`${RoutesEnum.Snippet}/${id}`);
  }

  async function handleDeletePost() {
    await removeSnippet(id);
    await getMyPosts(user!.id);
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
        onCommentClick={handleCommentClick}
      />
      {user?.username === creator && (
        <PostsButtonsContainer>
          <Button variant="contained" onClick={openDialog}>
            Update
          </Button>
          <Button variant="contained" onClick={handleDeletePost}>
            Delete
          </Button>
        </PostsButtonsContainer>
      )}
      <UpdatePostModal open={modal.isOpen} onClose={closeDialog} postId={id} />
    </PostContainer>
  );
};
export default Post;
