import onlyPublic from "@widgets/utils/onlyPublic";
import { HomeHeading, HomeMain, PostsContainer } from "./Home.styles";
import { useEffect } from "react";
import useSnippets from "@widgets/hooks/use-snippets";
import Spinner from "@shared/ui/Spinner";
import Post from "@widgets/ui/Post";

const HomePage: React.FC = () => {
  const { getAllSnippets, isLoading, posts } = useSnippets();

  useEffect(() => {
    getAllSnippets();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

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
    </HomeMain>
  );
};
export default onlyPublic(HomePage);
