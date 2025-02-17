import Aside from "@widgets/ui/Aside";
import {
  DescriptionP,
  ProfileHeading,
  ProfileMain,
  StrongP,
} from "./Profile.styles";

const ProfilePage: React.FC = () => {
  return (
    <ProfileMain>
      <Aside />
      <div className="text">
        <ProfileHeading>
          🖥️ Welcome to CodeLang – The Future of Coding Starts Here!
        </ProfileHeading>
        <StrongP>
          <strong>🚀 Learn. Build. Innovate.</strong>
        </StrongP>
        <DescriptionP>
          CodeLang is your all-in-one platform for mastering programming
          languages, sharpening your coding skills, and staying ahead in the
          tech world.
        </DescriptionP>
      </div>
    </ProfileMain>
  );
};
export default ProfilePage;
