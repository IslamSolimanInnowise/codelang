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
}

const PostFooter: React.FC<PostFooterProps> = ({
  likes,
  dislikes,
  comments,
}) => {
  return (
    <PostFooterContainer>
      <PostMarks>
        <PostLikes>
          <span>{likes}</span>
          <img src={likesIMG} alt="number of likes" />
        </PostLikes>
        <PostDislikes>
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
export default PostFooter;
