import { BrowserRouter, Route, Router, Routes, Link } from "react-router-dom";
import HomePage from "./components/Homepage";
import AboutPage from "./components/Aboutpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />{" "}
        <Route path="/about" element={<AboutPage/>} />{" "}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
