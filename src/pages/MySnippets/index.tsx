import Spinner from "@shared/ui/Spinner";
import useSnippets from "@widgets/hooks/use-snippets";
import Aside from "@widgets/ui/Aside";
import Post from "@widgets/ui/Post";
import { useEffect } from "react";
import {
  MySnippetsHeading,
  MySnippetsMain,
  PageContent,
  PostsContainer,
} from "./MySnippets.styles";
import useAuth from "@widgets/hooks/use-auth";

const MySnippetsPage: React.FC = () => {
  const { getMyPosts, isLoading, posts } = useSnippets();
  const { user } = useAuth();

  useEffect(() => {
    getMyPosts(user!.id);
  }, [getMyPosts, user]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <MySnippetsMain>
      <Aside />
      <PageContent>
        <MySnippetsHeading>Check out My snippets!</MySnippetsHeading>
        <PostsContainer>
          {posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </PostsContainer>
      </PageContent>
    </MySnippetsMain>
  );
};
export default MySnippetsPage;
