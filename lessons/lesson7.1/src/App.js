import GetUsers from "./all/GetUsers";
import store from "./store";
import { Provider } from "react-redux";


function App() {
  return (
    <Provider store={store}>
      <GetUsers/>
    </Provider>
  );
}

export default App;
