import { useState } from "react";

function ToDoList() {
  const [inputText, setInputText] = useState("");

  const [arr, setArr] = useState(["Prod 1", "Prod 2"]);

  function clickHandler() {
    if (!inputText.trim()) {
      return;
    }
    setArr([...arr, inputText]);
    // arr.push(inputText);
    setInputText("");
  }

  return (
    <>
      <label htmlFor="input">Введите текст: </label>
      <input
        onChange={(event) => setInputText(event.target.value)}
        type="text"
        id="input"
        value={inputText}
        maxLength={10}
      ></input>
      <button onClick={clickHandler}>Click to add</button>
      <ul>
        {arr.map((item) => (
          <li key={arr.indexOf(item)}>{item}</li>
        ))}
      </ul>
    </>
  );
  //   const addTodo = (event) => {
  //     event.preventDefault(); // Предотвращаем перезагрузку формы
  //       if (!currentTodo.trim())
  //           return; // Игнорируем пустые строки
  //     setTodos([...todos, currentTodo]); // Добавляем текущее дело в список
  //     setCurrentTodo(""); // Очищаем текстовое поле
  //   };

  //   // Состояние для хранения списка дел
  //   const [todos, setTodos] = useState([]);
  //   // Состояние для хранения текущего ввода в текстовом поле
  //     const [currentTodo, setCurrentTodo] = useState('');

  //   const getText = ({ target }) => {
  //     todoList.push(setText(target.value));
  //   };
  //   const businessList = todoList.map((item) => <li>{item}</li>);
  //   return (
  //     <>
  //       <input type="text" value={text} onChange={getText} required />
  //       <input type="submit" onClick={getText}></input>
  //       <p>{businessList}</p>
  //     </>
  //   );
}

export default ToDoList;
