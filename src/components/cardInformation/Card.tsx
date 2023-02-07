import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

/* 
Este componente renderiza la información de una card en particular, 
ya sea que se la seleccione con un click
o al utilizar el buscardor
*/

const Card = () => {
  const { gameInformation } = useSelector((state: RootState) => state);
  const {name,description,background_image} = gameInformation;

  return (
    <>
      <div className="container-game">
        <h1>{name}</h1>
        <div className="container-description">
          <p className="game-card">
            <span>{description}</span>
          </p>
          <img src={background_image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Card;
