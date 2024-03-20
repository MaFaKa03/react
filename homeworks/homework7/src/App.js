import { Provider } from "react-redux";
import TasksList from "./components/tasksList";
import { store } from "./store"


function App() {
  return (
    <Provider store={store}>
      <TasksList/>
    </Provider>
  );
}

export default App;
