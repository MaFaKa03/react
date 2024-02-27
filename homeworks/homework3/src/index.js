import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import TemperatureConverter from './Components/TemperatureConverter';
import TodoList from './Components/TodoList';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <TemperatureConverter />
    <TodoList/>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
