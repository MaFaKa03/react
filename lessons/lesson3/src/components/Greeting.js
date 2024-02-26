import Counter from "./Counter";

function Greeting({ name , theme}) {


    return ( 
        <>
            <p className={theme === 'light' ? 'light' : 'dark'}>Hello, {name}</p>
            <Counter theme={theme} />
        </>

     );
}

export default Greeting;