import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { FETCH_USERS_REQUEST } from "../reduceer/userSlice";

function FetchButton() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({type: "FETCH_USERS_REQUEST"});
  // }, [dispatch]);
  const handleClick = () => {
    dispatch({ type: "users/FETCH_USERS_REQUEST"});
    // dispatch(FETCH_USERS_REQUEST());
  };

  const { entities, loading, error } = useSelector((state) => state.users);
  // const arr = useSelector(state => state.users.value.entities);
  return (
    <>
      <button onClick={handleClick}>download</button>
      <div>
        <h1>Users:</h1>
        {loading === "pending" && <p> Loading...</p>}
        {error && <p> EROR: {error}</p>}
        <ul>
          {entities.map((entite) => (
            <li key={entite.id}>{entite.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FetchButton;
