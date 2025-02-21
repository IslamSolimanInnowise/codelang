import Aside from "@widgets/ui/Aside";
import {
  AllPostComments,
  PageContent,
  PostsContainer,
  SnippetMain,
} from "./Snippets.styles";
import useSnippets from "@widgets/hooks/useSnippets";
import Spinner from "@shared/ui/Spinner";
import DetailedPost from "@widgets/ui/DetailedPost";
import { useParams } from "react-router";
import { useEffect } from "react";
import Comment from "@entities/ui/Comment";

const SnippetPage: React.FC = () => {
  const { postData, isSnippetsLoading, getUsersOneSnippet, snippets } =
    useSnippets();
  const params = useParams();

  useEffect(() => {
    const numId = Number(params.id);
    getUsersOneSnippet(numId);
  }, [getUsersOneSnippet, params.id]);

  if (isSnippetsLoading) {
    return <Spinner />;
  }

  const post = postData[0];

  return (
    <SnippetMain>
      <Aside />
      <PageContent>
        <PostsContainer>
          <DetailedPost {...post} />
        </PostsContainer>
        <AllPostComments>
          {snippets.length > 0 &&
            snippets[0].comments.map((comment) => {
              return <Comment key={comment.id} {...comment} />;
            })}
        </AllPostComments>
      </PageContent>
    </SnippetMain>
  );
};
export default SnippetPage;
