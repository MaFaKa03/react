import { useState } from "react";

function TextInput() {
  const [text, setText] = useState();
  const getText = ({ target }) => {
    setText(target.value);
  };

  return (
    <>
      <input type="text" value={text} maxLength={10} onChange={getText} />
          <p> Вы ввели:{text}</p>
    </>
  );
}

export default TextInput;
