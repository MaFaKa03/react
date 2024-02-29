function List({list, render}) {
    return ( 
        <ul>{list.map((item, index) => (<li key={index}>{render(item, index)}</li>)) }</ul>
     );
}

export default List;