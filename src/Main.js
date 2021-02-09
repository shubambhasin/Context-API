import { useContext } from "react";
import AppTheme from "./AppTheme";
import ThemeContext from "./ThemeContext";

const Main = () => {
  const theme = useContext(ThemeContext);
  const currentTheme = AppTheme[theme];
  return (
    <main
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        color: `${currentTheme.textColor}`
      }}
    >
      <h1>Heading 1</h1>
      <p>This is a paragraph</p>
      <button> This is a button</button>
    </main>
  );
};

export default Main;
