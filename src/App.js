import Comp1 from "./Comp1";
import Main from "./Main";
import "./styles.css";
import ThemeContext from "./ThemeContext";

export default function App() {
  const theme = "light";

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App">
        <Main />
        <Comp1 />
      </div>
    </ThemeContext.Provider>
  );
}
