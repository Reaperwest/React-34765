import React from "react";
import Card from "../Card/Card";
import FlexWrapper from "../FlexWrapper/FlexWrapper";

function ItemList(props) {
  return (
    <>
      <FlexWrapper>
        {props.gamesList.map((game) => {
          return (
            <Card
              key={game.id}
              title={game.title}
              img={game.img}
              price={game.price}
              detail={game.detail}
              stock={game.stock}
              expired={game.expires}
            />
          );
        })}
      </FlexWrapper>
    </>
  );
}

export default ItemList;