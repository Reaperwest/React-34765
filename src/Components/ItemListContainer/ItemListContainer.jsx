import React, { useState, useEffect } from "react";
import "./ItemListContainer.css";

import { getGames, getGamesByCategory } from "../../services/firebase";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";

function ItemListContainer(props) {
  const [gamesList, setGamesList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const categoryID = params.categoryID;

   useEffect(() => {
    setGamesList([]);
    if (categoryID === undefined) {
      getGames().then((data) => {
        setGamesList(data);
        setIsLoading(false);
      });
    } else {
      getGamesByCategory(categoryID).then((data) => {
        setGamesList(data);
        setIsLoading(false);
      });
    }
  }, [categoryID]);

  return (
    <div className="container">
      <h1>Tendencias</h1>
      {isLoading ? <Loader /> : <ItemList gamesList={gamesList} />}
      <hr />
    </div>
  );
}

export default ItemListContainer;