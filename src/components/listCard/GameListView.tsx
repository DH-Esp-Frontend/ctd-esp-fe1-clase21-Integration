import GameCard from "./GameCard";
import { useSelector } from "react-redux";
import React from "react";
import CardGenre from "../listGenreItems/CardGenre";
import { RootState } from "../../redux/store";
import Card from "../cardInformation/Card";

const GameListView = () => {
  const { isAGenreSelected,isAGameSelected, allVideogames } = useSelector( ( state: RootState ) => state );

  let areThereGames = allVideogames.length != 0;

  return (
    <div className="section-cards">
      { isAGenreSelected ? <CardGenre/> : null}
      { isAGameSelected ? <Card/> : null }
      { areThereGames ? <GameCard/>: null }
    </div>
  );
};

export default GameListView;
