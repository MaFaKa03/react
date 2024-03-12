import { useContext } from "react";
import { UserContext } from "../App";
function Header() {
  const userName = useContext(UserContext);

  return <h1>Hello, {userName}</h1>;
}

export default Header;
