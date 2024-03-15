import React, { useContext } from "react";
import { FilterContext } from "../contexts/filterContext";

function TodoFilter() {
    
    const { filter, setFilter } = useContext(FilterContext);

    function handleChange(event) {
        setFilter(event.target.value);
    }
    
    return ( 
        <select value={filter}
            onChange={handleChange}>
            <option value='all'>All</option>
            <option value='completed'>Completed</option>
            <option value='active'>Active</option>
        </select>
     );
}

export default TodoFilter;