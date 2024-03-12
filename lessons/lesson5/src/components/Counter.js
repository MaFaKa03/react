import {useSelector, useDispatch} from 'react-redux'

function Counter() {

    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const dicrement = () => {
        dispatch({ type: 'DICREMENT' });
    };
    return ( 
        <>
            <h3>Count: {counter}</h3>
            <button onClick={increment}>Increment</button>
            <button onClick={dicrement}>Dictement</button>
        </>
     );
}

export default Counter;