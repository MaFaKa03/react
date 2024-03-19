import { useDispatch, useSelector } from "react-redux";
import { removeProduct, editProduct } from "../productsSlicer";
import { useState } from "react";
import {
  editAvaibleProduct,
  editDiscriptionProduct,
  editNameProduct,
  editPriceProduct,
} from "../productSlicer";
function ProductsList() {
  const productsList = useSelector((state) => state.products.allProducts);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [discription, setDisription] = useState("");
  const [avaible, setAvaible] = useState(true);
  const value = "";

  
  function handleEditProduct(e, idForNew, nameFromProp) {
    setProduct({
      id: idForNew,
      name: name,
      discription: discription,
      price: price,
      avaible: avaible,
    });
    dispatch(editProduct(product));
    // setName("");
    // e.target.closest(`li#${idForNew}`).querySelector('input').value = '';
    // document.getElementById(idForNew).querySelector("input").value = '';
  }

  // function onChangeProductEdit(idForNew) {
  //   setProduct({
  //     id: idForNew,
  //     name: name,
  //     discription: discription,
  //     price: price,
  //     avaible: avaible,
  //   });
  // }
  function onChangeName(e, id, name) {
    if (e.target.value === null) {
      setName(name);
    } else {
      setName(e.target.value);
    }
    
  }
  function handleEditName(e) {
    // e.preventDefault();
    dispatch(editNameProduct(name));
    e.target.closest("ul").querySelector("input").value = "";
    // setName('');
  }
  function onChangeDisription(e, id, discription) {
    if (e.target.value === "") {
      setDisription(discription);
    }
    setDisription(e.target.value);
  }
  function handleEditDiscription(e) {
    e.preventDefault();
    dispatch(editDiscriptionProduct(discription));
    e.target.closest("ul").querySelector("input").value = "";
  }
  function onChangePrice(e, id, price) {
    if (e.target.value === null) {
      setPrice(price);
    }
    setPrice(e.target.value);
  }
  function handleEditPrice(e) {
    e.preventDefault();
    dispatch(editPriceProduct(price));
    e.target.closest("li key=").querySelector("input").value = 0;
  }

  function handleEditAvaible(e) {
    e.preventDefault();
    dispatch(editAvaibleProduct(avaible));
    e.target.closest("li").querySelector("input").value = "";
  }

  function handleRemove(item) {
    dispatch(removeProduct(item));
  }

  return (
    <ul>
      {productsList.map((product) => (
        <li id={product.id}>
          <div>
            <h3>{product.name}</h3>
            <input
              type="text"
              onChange={(e) => onChangeName(e, product.id, product.name)}
            />
            <button
              onClick={(e) => handleEditProduct(e, product.id, product.name)}
            >
              {" "}
              Edit
            </button>
          </div>
          <div>
            <p>{product.discription}</p>
            <input
              type="text"
              onChange={(e) =>
                onChangeDisription(e, product.id, product.discription)
              }
            />
            <button
              onClick={(e) =>
                handleEditProduct(e, product.id, product.discription)
              }
            >
              {" "}
              Edit
            </button>
          </div>
          <div>
            <p>Price: {product.price}</p>
            <input
              type="number"
              onChange={(e) => onChangePrice(e, product.id, product.price)}
            />
            <button
              onClick={(e) => handleEditProduct(e, product.id, product.price)}
            >
              {" "}
              Edit
            </button>
          </div>
          <div>
            <p> {product.avaible === true ? "available" : "Not available"}</p>
            <input
              type="radio"
              value="avaible"
              checked={product.avaible ? true : false}
              onChange={() => setAvaible(true)}
            />
            <input
              type="radio"
              value="not avaible"
              checked={product.avaible ? false : true}
              onChange={() => setAvaible(false)}
            />
            <button onClick={(e) => handleEditProduct(e, product.id)}>
              {" "}
              Edit
            </button>
          </div>

          <button onClick={() => handleRemove(product)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ProductsList;
