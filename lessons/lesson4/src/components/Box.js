function Box({ children }) {
  return (
    <>
      <div
        style={{ border: "1px solid black", width: "200px", height: "100px" }}
      >
        {children}
      </div>
    </>
  );
}

export default Box;
