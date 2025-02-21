import commentsIMG from "@shared/assets/comments.svg";
import likesIMG from "@shared/assets/like.svg";
import dislikesIMG from "@shared/assets/dislike.svg";
import {
  PostComments,
  PostDislikes,
  PostFooterContainer,
  PostLikes,
  PostMarks,
} from "./PostDetailedFooter.styles";

interface PostDetailedFooterProps {
  likes: number;
  dislikes: number;
  comments: number;
  onLike: () => void;
  onDislike: () => void;
}

const PostDetailedFooter: React.FC<PostDetailedFooterProps> = ({
  likes,
  dislikes,
  comments,
  onLike,
  onDislike,
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
      <PostComments>
        <span>{comments}</span>
        <img src={commentsIMG} alt="number of comments" />
      </PostComments>
    </PostFooterContainer>
  );
};
export default PostDetailedFooter;
