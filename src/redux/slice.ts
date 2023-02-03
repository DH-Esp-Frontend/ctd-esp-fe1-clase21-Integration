import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Result {
  result: [];
}
export interface Pokemon {
  results: {
    name: string;
    url: string;
    id: number;
  };
  loading: boolean;
}
export interface PokemonsState {
  search: Pokemon;
  allPokemons: any[];
}
const initialState: PokemonsState = {
  search: {
    results: {
      name: "",
      url: "",
      id: 0,
    },
    loading: false,
  
  },
  allPokemons: [],
};

export const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    getOnePokemon: (state, _action) => {
    },
  },
});

export const {  getOnePokemon } =
  pokemonSlice.actions;
export default pokemonSlice.reducer;
