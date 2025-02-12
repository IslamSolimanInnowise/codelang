import { DescriptionP, HomeHeading, HomeMain, StrongP } from "./Home.styles";

const HomePage = () => {
  return (
    <HomeMain>
      <HomeHeading>
        🖥️ Welcome to CodeLang – The Future of Coding Starts Here!
      </HomeHeading>
      <StrongP>
        <strong>🚀 Learn. Build. Innovate.</strong>
      </StrongP>
      <DescriptionP>
        CodeLang is your all-in-one platform for mastering programming
        languages, sharpening your coding skills, and staying ahead in the tech
        world.
      </DescriptionP>
    </HomeMain>
  );
};
export default HomePage;
