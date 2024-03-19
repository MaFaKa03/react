import React from "react";
import { FilterProvider } from "./contexts/filterContext";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import { Provider } from "react-redux";
import store from "./store";
import ProductList from "./catalog/producrList";
import FavoriteList from "./catalog/favoriteList";

const productsData = [
  {
    id: 1,
    name: "Ноутбук",
    description: "Легкий и мощный, идеальный для работы и развлечений.",
    price: 45000,
    available: true,
  },
  {
    id: 2,
    name: "Чайник электрический",
    description: "Быстро кипятит воду, с функцией автоотключения.",
    price: 2500,
    available: true,
  },
  {
    id: 3,
    name: "Смартфон",
    description:
      "С большим экраном, высокой производительностью и отличной камерой.",
    price: 60000,
    available: false,
  },
];

// export const middleware = (store) => (next) => (action) => {
//   console.log("Действие:", action);
//   console.log("Состояние (до):", store.getState());
//   console.log("Состояние полсе: ", store.getState());
//   return next(action);
// };

function App() {
  return (
    // <FilterProvider>
    //   <AddTodo />
    //   <TodoList />
    //   <TodoFilter />
    // </FilterProvider>
    <Provider store={store}>
      <div>
        <ProductList products={productsData} />
        <FavoriteList />
      </div>
    </Provider>
  );
}

export default App;
