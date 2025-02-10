import { switchTheme } from "../features/theme/themeSlice";
import { useAppDispatch } from "../shared/hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();

  function handleThemeSwitch() {
    dispatch(switchTheme());
  }

  return (
    <div>
      <h2>Hello, World!</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi,
        dolorem.
      </p>
      <button onClick={handleThemeSwitch}>Switch Theme</button>
    </div>
  );
};
export default HomePage;
