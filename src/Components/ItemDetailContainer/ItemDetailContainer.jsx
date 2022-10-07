import React, { useState, useEffect } from "react";

import { getGame } from "../../mockAPI/mockAPI";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";

// 6. Leer los parámetros de la URL
import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [game, setGame] = useState([]);

  const { itemID } = useParams();

  useEffect(() => {
    getGame(itemID).then((data) => {
      setGame(data);
    });
  }, [itemID]);

  return (
    <FlexWrapper>
      <CardDetail
        title={game.title}
        img={game.img}
        price={game.price}
        detail={game.detail}
        stock={game.stock}
        expired={game.expires}
      />
    </FlexWrapper>
  );
}

export default ItemDetailContainer;