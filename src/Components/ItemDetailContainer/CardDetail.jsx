import React from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";

function CardDetail(props) {
  return (
    <div className="detail-container">
      <FlexWrapper>
        <div className="main container">
          <h1>{props.title}</h1>
          <div className="img">
          <img  src={props.img} alt={props.title} />
          </div>
          <h3>$ {props.price}</h3>
        </div>
        <ItemCount stock={props.stock} initial={1} text="Agregar al carrito" />
      </FlexWrapper>
    </div>
  );
}

export default CardDetail;