import onlyPublic from "@widgets/utils/onlyPublic";
import {
  HomeHeading,
  HomeMain,
  PostsContainer,
  StyledHomePagination,
} from "./Home.styles";
import { useEffect } from "react";
import useSnippets from "@widgets/hooks/use-snippets";
import Spinner from "@shared/ui/Spinner";
import Post from "@widgets/ui/Post";

const HomePage: React.FC = () => {
  const {
    getAllSnippets,
    isLoading,
    posts,
    currentPage,
    changePage,
    totalPages,
  } = useSnippets();

  useEffect(() => {
    getAllSnippets(currentPage);
  }, [currentPage, getAllSnippets]);

  if (isLoading) {
    return <Spinner />;
  }

  const handlePageChange = (_: React.ChangeEvent<unknown>, page: number) => {
    changePage(page);
  };

  return (
    <HomeMain>
      <HomeHeading>
        🖥️ Welcome to CodeLang – The Future of Coding Starts Here!
      </HomeHeading>
      <PostsContainer>
        {posts.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </PostsContainer>
      <StyledHomePagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
      />
    </HomeMain>
  );
};
export default onlyPublic(HomePage);
