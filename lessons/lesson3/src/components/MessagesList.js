import { useState } from "react";
import { PropTypes } from "prop-types";

function MessagesList({ id, text, theme }) {
  const [mesages, setMesages] = useState([
    { id: 1, text: "Привет, как дела?" },
    { id: 2, text: "Это тестовое сообщение" },
    { id: id, text: text },
  ]);

  const mesagesList = mesages.map((message) => (
    <li className={theme === 'light' ? 'light' : 'dark'} key={message.id}>{message.text}</li>
  ));

  return <ul>{mesagesList}</ul>;
}

MessagesList.propTypes = {
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
};

export default MessagesList;
