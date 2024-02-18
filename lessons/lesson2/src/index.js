import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import ToDoList from './components/TodList';
import Timer from './components/Timer';
import Timer2 from './components/Timer2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>  <Counter />
    <TextInput />
    <ToDoList />
    <Timer />
    <Timer2/>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
