import React from "react";
import { SagaFetchWithName } from "../../redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";

/*
  este componente recibe las props de todos los videogames

*/
//game:{ id?:number | undefined, name: string; background_image?:string }
const GameCard = () => {
// const {  id, name, background_image }  = game;
  
const dispatch: AppDispatch = useDispatch();
const { isLoading, allVideogames } = useSelector((state: RootState) => state);

const handleClick = (id?: number) => dispatch(SagaFetchWithName(id));

if (isLoading) <div> esta cargando </div>;

return <>
{
  allVideogames.flat()
    .map(({ id, name, background_image }) => (
      <div className="card" onClick={() => handleClick(id)}>
        <img src={background_image} alt="product-img" />
        <p className="p-card">{name}</p>
      </div>
    ))
};
</>
}
// <div className="card" onClick={() => handleClick(id)}>
//   <img src={background_image} alt="product-img" />
//   <p className="p-card">{name}</p>
// </div>};

export default GameCard;
