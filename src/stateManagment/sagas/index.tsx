import { takeLatest, all } from 'redux-saga/effects';
import * as sagas from "./sagas";
import { toDoActionConstants } from '../actions';

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
    yield all([
        takeLatest(toDoActionConstants.TODO_LIST_REQUEST, sagas.toDoListSaga),
    ]);
}
