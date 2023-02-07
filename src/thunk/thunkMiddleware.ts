import { createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

const api = "https://api.rawg.io/api/";
const key = "?key=0145b1d4cc9e43109418b8dffd38659d";


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

