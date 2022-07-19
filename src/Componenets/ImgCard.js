import React from "react";
import "./ImgCard.css";
const ImgCard = (props) => {
  return (
    <div>
      <img src={props.url} alt={props.key} />
      <p className="name">{props.name}</p>
      <p>Rank: {props.rank}</p>
      <p>Price in $: {props.price}</p>
      <p>MarketCap: {props.marketCap}</p>
    </div>
  );
};

export default ImgCard;
