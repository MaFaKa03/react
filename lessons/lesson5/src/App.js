import { createContext, useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./store";
import Counter from "./components/Counter";

export const UserContext = createContext("Guest");
export const ThemeContext = createContext("light");

function App() {
  const [theme, setTheme] = useState("light");
  const [userName, setUserName] = useState("Guest");

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  setTimeout(() => {
    setIsLoading(false);
    setData("Загруженные данные");
  }, 3000);

  function withLoadingIndecator(WrappedComponent) {
    return ({ isLoading, ...props }) => {
      if (isLoading) {
        return <div>Loading...</div>;
      }
      return <WrappedComponent {...props} />;
    };
  }

  function SomeComponent({ data }) {
    return <div>{data}</div>;
  }

  const Component = withLoadingIndecator(SomeComponent);

  function changeUserName(e) {
    e.preventDefault();
    let newUserName = e.target.closest("div").querySelector("input").value;
    setUserName(newUserName);
    newUserName = "";
    e.target.closest("div").querySelector("input").value = "";
  }

  function switchTheme(e) {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  return (
    <>
      {" "}
      <ThemeContext.Provider value={theme}>
        <UserContext.Provider value={userName}>
          <Header />
          <div>
            <input />
            <button onClick={changeUserName}> Edit</button>
          </div>
          <Profile />
          <Footer />
          <button onClick={switchTheme}>switch theme</button>
        </UserContext.Provider>
      </ThemeContext.Provider>
      <Component isLoading={isLoading} data={data} />
      <Provider store={store}>
        <Counter/>
      </Provider>
    </>
  );
}

export default App;
