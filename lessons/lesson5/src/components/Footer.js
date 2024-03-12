import { useContext, useState } from "react";
import { ThemeContext } from "../App";
import "../style.css";

function Footer() {
  const theme = useContext(ThemeContext);
  const [now, setNow] = useState(new Date());
  setInterval(() => {
    setNow(new Date());
  }, 1000);

  return (
    <div className={theme}>
      <h2> Footer</h2>
      <p> Current time: {now.toLocaleTimeString()}</p>
    </div>
  );
}

export default Footer;
