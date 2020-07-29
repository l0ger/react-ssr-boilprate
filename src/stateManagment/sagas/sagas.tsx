
import { call, put } from 'redux-saga/effects';
import { toDoActions } from '../actions';
import  {api} from "../../services/api";
import { Action } from '../../types/state';

export function* toDoListSaga(action:Action) {
    const response = yield call(api.getToDoList,action);
    if (response.status===200) {
        console.log("SUCCESS")
      yield put(toDoActions.toDoListSuccess(response.data));
    } else {
      yield put(toDoActions.toDoListFaiure({}));
    }
  }

export const sagas = {
    toDoListSaga
}