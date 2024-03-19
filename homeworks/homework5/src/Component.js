import { useSelector, useDispatch } from 'react-redux';
import './style.css';

function Component() {

    const arrStyleAndIsLight = useSelector(state => state);
    // const isLight = useSelector(isLightState => isLightState);
    // const style = useSelector(styleState => styleState)
    const dispatch = useDispatch();

    function switchTheme() {

        if (arrStyleAndIsLight.isLight === true) {
            dispatch({ type: "TRUE" });
        } else {
            dispatch({ type: "FALSE" });
        }
        
    }

    return ( 
        <>
            <h1 className={arrStyleAndIsLight.style}>My component</h1>
            <button onClick={switchTheme}>Switch Theme</button>
        </>
     );
}

export default Component;