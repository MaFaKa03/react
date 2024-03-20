import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFavorite } from "./favoriteSlicer";

const FavoriteList = () => {
  const favoriteItemss = useSelector(state => state.favorites.favoriteItems);
  const dispacth = useDispatch();
  const handleRemoveFromFavorite = (item) => {
    dispacth(removeFavorite(item));
  };

  return (
    <div>
      <h2>All favorite</h2>
      <ul>
        {favoriteItemss.map((item) => (
          <li key={item.id}>
            <div>
              {item.name}: {item.price}
            </div>
            <button onClick={() => handleRemoveFromFavorite(item)}>
              Remove fron favorite
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FavoriteList;
