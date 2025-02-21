import Aside from "@widgets/ui/Aside";
import {
  AllPostComments,
  PageContent,
  PostsContainer,
  SnippetMain,
} from "./Snippets.styles";
import useSnippets from "@widgets/hooks/use-snippets";
import Spinner from "@shared/ui/Spinner";
import DetailedPost from "@widgets/ui/DetailedPost";
import { useParams } from "react-router";
import { useEffect } from "react";
import Comment from "@entities/ui/Comment";

const SnippetPage: React.FC = () => {
  const { post, isLoading, getUsersOneSnippet, snippet } = useSnippets();
  const params = useParams();

  useEffect(() => {
    const numId = Number(params.id);
    getUsersOneSnippet(numId);
  }, [getUsersOneSnippet, params.id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SnippetMain>
      <Aside />
      <PageContent>
        {post && (
          <PostsContainer>
            <DetailedPost {...post} />
          </PostsContainer>
        )}
        <AllPostComments>
          {snippet &&
            snippet.comments.map((comment) => {
              return <Comment key={comment.id} {...comment} />;
            })}
        </AllPostComments>
      </PageContent>
    </SnippetMain>
  );
};
export default SnippetPage;
