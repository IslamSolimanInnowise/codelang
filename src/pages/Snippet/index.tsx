import Aside from "@widgets/ui/Aside";
import { PageContent, PostsContainer, SnippetMain } from "./Snippets.styles";
import useSnippets from "@widgets/hooks/useSnippets";
import Spinner from "@shared/ui/Spinner";
import DetailedPost from "@widgets/ui/DetailedPost";
import { useParams } from "react-router";
import { useEffect } from "react";

const SnippetPage: React.FC = () => {
  const { postData, isSnippetsLoading, getUsersOneSnippet } = useSnippets();
  const params = useParams();

  useEffect(() => {
    const numId = Number(params.id);
    getUsersOneSnippet(numId);
  }, [getUsersOneSnippet, params.id]);

  if (isSnippetsLoading) {
    return <Spinner />;
  }

  return (
    <SnippetMain>
      <Aside />
      <PageContent>
        <PostsContainer>
          {postData.map((post) => {
            return <DetailedPost key={post.id} {...post} />;
          })}
        </PostsContainer>
      </PageContent>
    </SnippetMain>
  );
};
export default SnippetPage;
