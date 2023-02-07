import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {  getAllVideogames } from "../../redux/slice";
import { RootState,AppDispatch } from "../../redux/store";
import {saveGenreInformation} from "../../thunk/thunkMiddleware";

const GameGenreList = () => {
  const dispatch:AppDispatch = useDispatch();
 
  const { allGenres, isAGenreSelected, isAGameSelected } = useSelector(
    (state:RootState) => state
  );

  return (
    <>
      <div className="container-genre">
        <p>GENEROS</p>
        {isAGenreSelected || isAGameSelected ? (
          <button onClick={() => dispatch(getAllVideogames(""))} className="button-back">
            volver{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-home"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#597e8d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="5 12 3 12 12 3 21 12 19 12" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
          </button>
        ) : (
          <ul>
            {allGenres?.length >= 0 &&
              allGenres.map((x: any) => (
                <p
                  className="genre"
                  onClick={() => dispatch(saveGenreInformation(x.id))}
                >
                  {x.name}
                </p>
              ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default GameGenreList;
