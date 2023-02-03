import { configureStore } from "@reduxjs/toolkit";
import pokemonsSlice from "./slice";
import createSagaMiddleware from "redux-saga";
//import

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: pokemonsSlice,
  middleware:[sagaMiddleware]
});

//sagaMiddleware.run(---)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
