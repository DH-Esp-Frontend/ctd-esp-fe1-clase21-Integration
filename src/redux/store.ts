import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import videogamesSlice from "./slice";
import createSagaMiddleware from "redux-saga";
import { sagas } from "../saga/sagaMiddleware";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: videogamesSlice,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(sagas)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
