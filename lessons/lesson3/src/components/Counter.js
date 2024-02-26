import { useState } from "react";
import MessagesList from "./MessagesList";

function Counter({theme}) {
    
    const [count, setCount] = useState(0);
    function countUpdate() {
        setCount(count + 1);
    }
    function countDawndate() {
        setCount(count - 1);
    }
    return ( 
        <>
            <p className={theme === 'light' ? 'light' : 'dark'}>{count}</p>
            <button onClick={countDawndate}>Click dawn</button>
            <button onClick={countUpdate}>Click up</button>
            <MessagesList theme={theme}/>

        </>
     );
}

export default Counter;