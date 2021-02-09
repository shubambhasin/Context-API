import React from "react";
import AppTheme from "./AppTheme";
import Comp2 from "./Comp2";
import ThemeContext from "./ThemeContext";

const Comp1 = () => {
  return (
    <div style={{ backgroundColor: "" }}>
      <h1
        style={{
          color: ""
        }}
      >
        I am heading one
      </h1>
      <Comp2/>
    </div>
  );
}

export default Comp1;
