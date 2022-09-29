import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import { getGames } from "../mockAPI/mockAPI";
import ItemList from "./ItemList";
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props) {
  const [gamesList, setGamesList] = useState([]);  

  useEffect(() => {
    getGames().then((data) => {
      setGamesList(data);
    });
  }, []);

  return (
    <div className="container">
      <h1>{props.greeting}</h1>
      <ItemList gamesList={gamesList} />
      <hr />
    </div>
  );
}

export default ItemListContainer;