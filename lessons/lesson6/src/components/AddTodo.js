import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todoActions";

function AddTodo() {
    
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    function handleAddTodo() {
        dispatch(addTodo(text));
        setText('')
    }
    
    
    return ( 
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={handleAddTodo}> Add todo</button>
        </div>
     );
}

export default AddTodo;