import Aside from "@widgets/ui/Aside";
import {
  PageContent,
  PostsContainer,
  ProfileHeading,
  ProfileMain,
  StyledPagination,
} from "./Profile.styles";
import useSnippets from "@widgets/hooks/use-snippets";
import React, { useEffect } from "react";
import Spinner from "@shared/ui/Spinner";
import Post from "@widgets/ui/Post";

const ProfilePage: React.FC = () => {
  const {
    getAllSnippets,
    isLoading,
    posts,
    currentPage,
    totalPages,
    changePage,
  } = useSnippets();

  useEffect(() => {
    getAllSnippets({ currentPage });
  }, [getAllSnippets, currentPage]);

  if (isLoading) {
    return <Spinner />;
  }

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    changePage(page);
  };

  return (
    <>
      <ProfileMain>
        <Aside />
        <PageContent>
          <ProfileHeading>Check out these snippets!</ProfileHeading>
          <PostsContainer>
            {posts.map((post) => {
              return <Post key={post.id} {...post} />;
            })}
          </PostsContainer>
          <StyledPagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
          />
        </PageContent>
      </ProfileMain>
    </>
  );
};
export default ProfilePage;
