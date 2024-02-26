import "./CurrentTime.css";
function CurrentTime() {
  const now = new Date().toLocaleTimeString();
  return <div className="time">время сейчас {now} </div>;
}

export default CurrentTime;
