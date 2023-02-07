import React,{useState} from "react";
//@ts-ignore
import sonic from "./assets/sonic.svg"
import { useDispatch } from "react-redux";
import { SagaFetchWithName } from "../../redux/slice";
import { AppDispatch } from "../../redux/store";

const Search: React.FC = () => {
  const [name, setName] = useState<string>("");
  const dispatch:AppDispatch = useDispatch();


  const Submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(SagaFetchWithName(name));
  };


  return (
    <div className="container-search">
      <img src={sonic} alt="sonic" className="img-icon" />
      <form onSubmit={Submit}>
        <div className="searchGame">
          <label>
            Search Videogame
            <input
              type="text"
              placeholder={" ...bioshock, hitman, hollow-knight, etc"}
              onChange={(e) => setName(e.target.value)}
              className="input-search"
            />
          </label>
          <button className="button-seach">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
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
              <circle cx="10" cy="10" r="7" />
              <line x1="21" y1="21" x2="15" y2="15" />
            </svg>
          </button>
        </div>
      </form>
      <div style={{ display: "flex", flexDirection: "row" }}></div>
    </div>
  );
};

export default Search;