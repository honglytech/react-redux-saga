import { all } from "redux-saga/effects";
import watcherUserSaga from "./handlers/fetchUsers";

export default function* rootSaga() {
  yield all([watcherUserSaga()]);
}
