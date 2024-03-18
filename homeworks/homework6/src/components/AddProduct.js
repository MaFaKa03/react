import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../productsSlicer";

function AddNewProduct() {
  const arr = useSelector((state) => state.products.allProducts);
  const [newProduct, setNewProduct] = useState({});
  // const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [discription, setDisription] = useState("");
  const [price, setPrice] = useState("");
  const [avaible, setAvaible] = useState(true);

  const dispacth = useDispatch();

  function HundleAddProduct(e) {
    setNewProduct({
      id: arr.length + 1,
      name: name,
      discription: discription,
      price: price,
      avaible: avaible,
    });
    dispacth(addProduct(newProduct));
  }
  return (
    <div>
      <h3>Add new product</h3>
      <p>Enter name: </p>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>Enter description: </p>
      <input type="text" onChange={(e) => setDisription(e.target.value)} />
      <p>Enter price: </p>
      <input type="number" onChange={(e) => setPrice(e.target.value)} />
      <p>Change available</p>

      <input type="radio" onChange={() => setAvaible(true)} />
      <p>Change not available </p>

      <input type="radio" onChange={() => setAvaible(false)} />
      <button onClick={(e) => HundleAddProduct()}>Add</button>
    </div>
  );
}

export default AddNewProduct;
