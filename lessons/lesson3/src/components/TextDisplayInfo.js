import { useState } from "react";

function TextDisplayInfo() {
  const [text, setText] = useState("");
  const [textPrinted, setTextPrinted] = useState("");

  function handleText(event) {
      event.preventDefault();
      setText(event.target.value)
    // setTextPrinted(text);
    // setText("");
  }
    function textSubmit(event) {
        event.preventDefault();
        setTextPrinted(text);
        setText("");
    }
  return (
    <>
      {" "}
      <form>
        <input
          type="text"
                  value={text}
                  onChange={(e) => handleText(e)}
        //   onChange={(e) => setText(e.target.value)}
        />
        <button onClick={textSubmit}>Click</button>
      </form>
      <p>{textPrinted}</p>
    </>
  );
}

export default TextDisplayInfo;
