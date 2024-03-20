import { useState } from "react";

function ExhangeMoney() {
  const [sum, setSum] = useState(0);
  const [target, setTarget] = useState("");
    const [course, setCourse] = useState(0);
    const [result, setResult] = useState(0);

  async function getChange() {
    //https://v6.exchangerate-api.com/v6/134365b78fe615a078b5ef7a/latest/RUB/
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/134365b78fe615a078b5ef7a/pair/RUB/${target}`
      );
      if (!response.ok) {
        throw new Error("Eror get data");
      }
      const result = await response.json();
        setCourse(result.conversion_rate);
        setResult(course * sum);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
          <input type="number" placeholder='Enter sum' onChange={(e) => setSum(e.target.value)} />
          <input type="text" placeholder="Enter currency" onChange={(e) => setTarget(e.target.value)}/>
          <button onClick={getChange}>Converted</button>
          <p>{result}</p>
    </div>
  );
}

export default ExhangeMoney;
