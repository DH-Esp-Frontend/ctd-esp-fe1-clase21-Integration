import { call,takeEvery,put } from "redux-saga/effects";
import { saveAllVideogames, SagaSaveGameInformation } from "../redux/slice";
import { GameInformation } from "../redux/slice"

const api = "https://api.rawg.io/api/";
const key = "?key=";



 function* videoGames() {
  const { results } = yield call(() =>
    fetch(`${api}games${key}`).then((res) => res.json())
  );
  yield put(saveAllVideogames(results));
}

function* fetchInformationOfAGame(payload:any) {
  const results:GameInformation = yield call(() =>
    fetch(`${api}games/${payload.payload}${key}`).then((res) => res.json())
  );
  yield put(SagaSaveGameInformation(results));
}

export function* sagas(){
  yield takeEvery("videogames/getAllVideogames",videoGames)
  yield takeEvery("videogames/SagaFetchWithName", fetchInformationOfAGame);
}