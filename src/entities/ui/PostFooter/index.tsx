import commentsIMG from "@shared/assets/comments.svg";
import likesIMG from "@shared/assets/like.svg";
import dislikesIMG from "@shared/assets/dislike.svg";

import {
  PostComments,
  PostDislikes,
  PostFooterContainer,
  PostLikes,
  PostMarks,
} from "./PostFooter.styles";

interface PostFooterProps {
  likes: number;
  dislikes: number;
  comments: number;
  onLike: () => void;
  onDislike: () => void;
  onCommentClick: () => void;
}

const PostFooter: React.FC<PostFooterProps> = ({
  likes,
  dislikes,
  comments,
  onLike,
  onDislike,
  onCommentClick,
}) => {
  return (
    <PostFooterContainer>
      <PostMarks>
        <PostLikes onClick={onLike}>
          <span>{likes}</span>
          <img src={likesIMG} alt="number of likes" />
        </PostLikes>
        <PostDislikes onClick={onDislike}>
          <span>{dislikes}</span>
          <img src={dislikesIMG} alt="number of dislikes" />
        </PostDislikes>
      </PostMarks>
      <PostComments onClick={onCommentClick}>
        <span>{comments}</span>
        <img src={commentsIMG} alt="number of comments" />
      </PostComments>
    </PostFooterContainer>
  );
};
export default PostFooter;
