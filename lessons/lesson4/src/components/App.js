import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Box from "./Box";
import List from "./List";
import DetailPage from "./DetailPage";
import ListPage from "./ListPage";

function App() {
  const products = [
    { id: 1, name: "apple", disription: "yami yami", price: 150 },
    { id: 2, name: "orange", disription: "yami yami cool", price: 350 },
  ];
  const someList = ["item1", "item3", "item4"];
  function render(item, index) {
    return (
      <div style={{ color: index % 2 === 0 ? "blue" : "red" }}>{item}</div>
    );
  }

  return (
    <>
      <Box>
        <p>This is first item</p>
      </Box>
      <Box>
        <p>This is second item</p>
      </Box>
      <Box>
        <p>This is third item</p>
      </Box>
      <Box>
        <h1>This is fouth item</h1>
      </Box>
      <List list={someList} render={render} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/products/:id"
            element={<DetailPage products={products} />}
          />
          <Route path="*" element={<ListPage products={products} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
