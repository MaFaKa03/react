import { useState } from "react";
import Greeting from "./Greeting";

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");
  function themeSwitch() {
    if (theme === "light") {
      setTheme("dark");
      document.querySelector("body").style.backgroundColor = "black";
    } else {
      setTheme("light");
      document.querySelector("body").style.backgroundColor = "white";
    }
  }
    return (
        <>
            <button onClick={themeSwitch}>Switch</button>
            <Greeting theme={theme}/>
        </>

    );
}

export default ThemeSwitcher;
