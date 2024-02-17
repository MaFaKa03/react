import './style.css';
function Message(props) {
    return (<div className="Container">
        <p className="Container__Text">{props.message}</p>
    </div> );
}

export default Message;