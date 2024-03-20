import React, { Component, useState } from "react";
// class Joke extends Component {

//     function gerJoke() {
//         fetch("https://api.chucknorris.io/jokes/random")
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Error get data");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 this.setState({ joke: data });
//             })
//             .catch((eror) => {
//                 console.log("Eror get data:", eror);
//             });
//     }

//     function handleGetJoke() {

//     }

//     render() {
//         const joke = this.state;

//         return (

//         )
//     }
// }

function GetJoke() {
  const [joke, setJoke] = useState({});
  const [error, setError] = useState(false);

  const getJoke = async () => {
    try {
      const response = await fetch("https://api.chucknorris.io/jokes/random");
      if (!response.ok) {
        throw new Error(`Error get data: ${response.status}`);
      }

      const result = await response.json();
      setJoke(result);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  // useEffect(() => {
  //     getJoke()
  // }, {});

  return (
    <div>
      <button onClick={getJoke}>Get joke</button>
      <p>{joke.value}</p>
    </div>
  );
}

export default GetJoke;
