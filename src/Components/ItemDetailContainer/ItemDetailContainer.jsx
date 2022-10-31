import React, { useState, useEffect } from "react";

import { getGame } from "../../services/firebase";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import CardDetail from "./CardDetail";

import { useParams } from "react-router-dom";

function ItemDetailContainer(props) {
  const [game, setGame] = useState([]);
  const [feedbackMsg, setFeedbackMsg] = useState(null);
  const { itemID } = useParams();

  console.log("Item id", itemID );
  useEffect(() => {
    getGame(itemID)
      .then((data) => {
        setGame(data);
      })
      .catch((error) => {
        console.log("Catch?")
        setFeedbackMsg(error.message);
      });
  }, [itemID]);


  return (
    <FlexWrapper>
      {feedbackMsg !== null ? (
        <h4>Error: {feedbackMsg}</h4>
      ) : (
        <CardDetail game={game} />
      )}
    </FlexWrapper>
  );
}

export default ItemDetailContainer;