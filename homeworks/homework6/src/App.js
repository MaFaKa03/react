import { Provider } from 'react-redux';
import  store  from './store';
import ProductsList from './components/ProductsList';
import AddNewProduct from './components/AddProduct';

function App() {

  const productsData = [
    {
      id: 1,
      name: "Ноутбук",
      discription: "Легкий и мощный, идеальный для работы и развлечений.",
      price: 45000,
      avaible: true,
    },
    {
      id: 2,
      name: "Чайник электрический",
      discription: "Быстро кипятит воду, с функцией автоотключения.",
      price: 2500,
      avaible: true,
    },
    {
      id: 3,
      name: "Смартфон",
      discription:
        "С большим экраном, высокой производительностью и отличной камерой.",
      price: 60000,
      avaible: false,
    },
  ];

  return (
    <Provider store={store}>
      <ProductsList />
      <AddNewProduct/>
    </Provider>
  );
}

export default App;
