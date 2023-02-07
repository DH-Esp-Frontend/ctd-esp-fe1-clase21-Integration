import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const api = "https://api.rawg.io/api/";
const key = "?key=";


export const saveAllGenres = createAsyncThunk("videogames/saveAllGenres", async () => {
  const res = await fetch(`${api}genres${key}`);
  const { results } = await res.json();
  return results;
});

export const saveGenreInformation = createAsyncThunk(
  "videogames/saveGenreInformation", async(payload:PayloadAction)=>{
    const res = await fetch(`${api}genres/${payload}${key}`);
    const results = await res.json();
    return results;
  }
);

