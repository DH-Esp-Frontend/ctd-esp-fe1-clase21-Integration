import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const CardGenre = ()=>{

   const { genreInformation } = useSelector((state:RootState) => state)

   const divStyle = { backgroundImage: "url(" + genreInformation?.image_background + ")",};

return (
  <div style={divStyle}>
    <h2>{genreInformation.name}</h2>
    <div className="container-genres">
      <p className="genre-description">{genreInformation.description}</p>
      <div className="img-genre">
        <img
          src={genreInformation.image_background}
          alt={genreInformation.name}
        />
      </div>
    </div>
  </div>
);
}

export default CardGenre;