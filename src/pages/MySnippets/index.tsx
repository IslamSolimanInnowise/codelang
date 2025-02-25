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
  StyledPagination,
} from "./MySnippets.styles";
import useAuth from "@widgets/hooks/use-auth";

const MySnippetsPage: React.FC = () => {
  const {
    getMyPosts,
    isLoading,
    posts,
    mySnippetsCurrentPage,
    changeMyPage,
    mySnippetsTotalPages,
  } = useSnippets();
  const { user } = useAuth();

  useEffect(() => {
    getMyPosts({ userId: user!.id, page: mySnippetsCurrentPage });
  }, [getMyPosts, user, mySnippetsCurrentPage]);

  if (isLoading) {
    return <Spinner />;
  }

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    changeMyPage(page);
  };

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
        <StyledPagination
          count={mySnippetsTotalPages}
          page={mySnippetsCurrentPage}
          onChange={handlePageChange}
        />
      </PageContent>
    </MySnippetsMain>
  );
};
export default MySnippetsPage;
