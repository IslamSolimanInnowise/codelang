import Aside from "@widgets/ui/Aside";
import {
  PageContent,
  PostsContainer,
  ProfileHeading,
  ProfileMain,
} from "./Profile.styles";
import useSnippets from "@widgets/hooks/useSnippets";
import { useEffect } from "react";
import Spinner from "@shared/ui/Spinner";
import Post from "@widgets/ui/Post";

const ProfilePage: React.FC = () => {
  const { getUsersSnippets, isSnippetsLoading, postData } = useSnippets();

  useEffect(() => {
    getUsersSnippets();
  }, [getUsersSnippets]);

  if (isSnippetsLoading) {
    return <Spinner />;
  }
  return (
    <ProfileMain>
      <Aside />
      <PageContent>
        <ProfileHeading>Check out these snippets!</ProfileHeading>
        <PostsContainer>
          {postData.map((post) => {
            return <Post key={post.id} {...post} />;
          })}
        </PostsContainer>
      </PageContent>
    </ProfileMain>
  );
};
export default ProfilePage;
