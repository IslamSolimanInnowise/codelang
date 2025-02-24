import Aside from "@widgets/ui/Aside";
import {
  AllPostComments,
  PageContent,
  PostsContainer,
  SnippetMain,
} from "./Snippets.styles";
import useSnippets from "@widgets/hooks/use-snippets";
import Spinner from "@shared/ui/Spinner";
import { useParams } from "react-router";
import { useEffect } from "react";
import Comment from "@widgets/ui/Comment";
import NewCommentForm from "@widgets/ui/NewCommentForm";
import Post from "@widgets/ui/Post";

const SnippetPage: React.FC = () => {
  const { post, isLoading, getSnippet, snippet } = useSnippets();

  const params = useParams();

  useEffect(() => {
    const numId = Number(params.id);
    getSnippet(numId);
  }, [getSnippet, params.id]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <SnippetMain>
      <Aside />
      <PageContent>
        {post && (
          <PostsContainer>
            <Post {...post} />
          </PostsContainer>
        )}
        <NewCommentForm />
        <AllPostComments>
          {snippet &&
            snippet.comments.map((comment) => {
              return <Comment key={comment.id} {...comment} id={comment.id} />;
            })}
        </AllPostComments>
      </PageContent>
    </SnippetMain>
  );
};
export default SnippetPage;
