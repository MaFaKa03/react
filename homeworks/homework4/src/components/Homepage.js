import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function HomePage() {
  return (
    <>
      <h1>This is homepage </h1>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> about us</Link>
          </li>
        </ul>

    </>
    // <Link to={"./components/Aboutpage.js"}>to about</Link>
  );
}

export default HomePage;
