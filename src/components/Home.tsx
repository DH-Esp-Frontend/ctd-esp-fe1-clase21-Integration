import React, { useEffect } from "react";
import Search from "./navBar/Search";
import GameGenreList from "./listGenreItems/GameGenreList";
import Footer from "./footer/Footer";
import GameListView from "./listCard/GameListView";
import { getAllVideogames } from "../redux/slice";
import { saveAllGenres } from "../thunk/thunkMiddleware";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import Card from "./cardInformation/Card";

const Home = () => {
  const dispatch: AppDispatch = useDispatch();

  const { allVideogames, isAGameSelected } = useSelector(
    (state: RootState) => state
  );
  /* Este componente utiliza un effecto para despachar dos actiones, 
    getAllVideogames está contruido con Saga para traer los primeros 20 juegos
    mientras que saveAllGenres utiliza Thunk para traerse la lista de generos existentes
  */
  useEffect(() => {
    dispatch(getAllVideogames(""));
    dispatch(saveAllGenres());
  }, []);

  return (
    <div>
      <Search />
      <div className="content">
        <GameGenreList />
        <GameListView/>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
