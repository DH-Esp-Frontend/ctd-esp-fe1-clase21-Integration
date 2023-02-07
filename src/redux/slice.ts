import { createSlice, createAsyncThunk, PayloadAction, AnyAction } from "@reduxjs/toolkit";
import { saveAllGenres, saveGenreInformation } from "../thunk/thunkMiddleware";


export interface GameInformation {
  name: string,
  description?: string,
  background_image?: string,
  image_background?:string,
  id?:number
}
interface State {
  isLoading: boolean;
  isAGenreSelected: boolean;
  allVideogames: GameInformation[];
  allGenres: string[];
  genreInformation: GameInformation;
  gameInformation: GameInformation;
  isAGameSelected: boolean;
}
const initialState: State = {
  isLoading: false,
  isAGenreSelected: false,
  allVideogames: [],
  allGenres: [],
  genreInformation: {
    name: "",
    description: "",
    background_image: "",
    image_background:"",
  },
  gameInformation: { name: "", description: "", background_image: "",id:0 },
  isAGameSelected: false,
};

export const videogamesSlice = createSlice({
  name: "videogames",
  initialState,
  reducers: {
    getAllVideogames: (state, _action) => {
      state.isLoading = true;
      state.isAGenreSelected = false;
      state.isAGameSelected = false;
    },
    saveAllVideogames: (state, action: PayloadAction<GameInformation>) => {
      state.allVideogames.length == 0 &&
        state.allVideogames.push(action.payload);
      state.isLoading = false;
    },
    getIdGenre: (state, _action) => {
      state.isLoading = true;
      state.isAGenreSelected = true;
    },

    SagaFetchWithName: (state, _action) => {
      state.isLoading = true;
      state.isAGenreSelected = false;
      state.isAGameSelected = true;
    },
    SagaSaveGameInformation: (
      state,
      action: PayloadAction<GameInformation>
    ) => {
      state.gameInformation = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        saveAllGenres.fulfilled,
        (state, action: PayloadAction<string[]>) => {
          state.isLoading = false;
          state.isAGenreSelected = false;
          state.allGenres = action.payload;
        }
      )
      .addCase(saveGenreInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isAGenreSelected = true;
        state.genreInformation = action.payload;
      });
  },
});


export const {
  getAllVideogames,
  saveAllVideogames,
  getIdGenre,
  SagaFetchWithName,
  SagaSaveGameInformation,
} = videogamesSlice.actions;

export default videogamesSlice.reducer;
