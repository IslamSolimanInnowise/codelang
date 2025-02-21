import Aside from "@widgets/ui/Aside";
import {
  PageContent,
  PostsContainer,
  ProfileHeading,
  ProfileMain,
} from "./Profile.styles";
import useSnippets from "@widgets/hooks/use-snippets";
import { useEffect } from "react";
import Spinner from "@shared/ui/Spinner";
import Post from "@widgets/ui/Post";

const ProfilePage: React.FC = () => {
  const { getUsersSnippets, isLoading, posts } = useSnippets();

  useEffect(() => {
    getUsersSnippets();
  }, [getUsersSnippets]);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <ProfileMain>
      <Aside />
      <PageContent>
        <ProfileHeading>Check out these snippets!</ProfileHeading>
        <PostsContainer>
          {posts.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </PostsContainer>
      </PageContent>
    </ProfileMain>
  );
};
export default ProfilePage;
