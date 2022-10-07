import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import { getGames, getGamesByCategory } from "../../mockAPI/mockAPI";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {
  const [gamesList, setGamesList] = useState([]);
  const params = useParams();
  const categoryID = params.categoryID;

  useEffect(() => {
    if (categoryID === undefined) {
      getGames().then((data) => {
        setGamesList(data);
      });
    } else {
      getGamesByCategory(categoryID).then((data) => {
        setGamesList(data);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Tendencias</h1>
      <ItemList gamesList={gamesList} />
      <hr />
    </div>
  );
}

export default ItemListContainer;