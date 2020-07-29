
import { combineReducers,AnyAction } from 'redux';
import { toDoActionConstants } from './actions';
import { Action,State } from '../types/state';
import initState from './initState';
import { HYDRATE } from 'next-redux-wrapper';

export function toDoListReducer(prevState = initState, action: Action) {
  switch (action.type) {
    case toDoActionConstants.TODO_LIST_REQUEST:
      return Object.assign({}, initState, { fetching: true })

    case toDoActionConstants.TODO_LIST_SUCCESS: return Object.assign({}, prevState, {
      fetching: true,
      payload: action.payload,
      error: false,
      success: true,
      errorMessage: ''
    })

    case toDoActionConstants.TODO_LIST_FAILURE: return Object.assign({}, prevState, {
      fetching: false,
      toDoList: [],
      error: true,
      success: false,
      errorMessage: action.payload.errorMessage
    })

    default:
      return initState
  }
}


const tick = (state: State = {tick: 'init'}, action: AnyAction) => {
  switch (action.type) {
      case HYDRATE:
          // Attention! This will overwrite client state! Real apps should use proper reconciliation.
          return {...state, ...action.payload};
      case 'TICK':
          return {...state, tick: action.payload};
      default:
          return state;
  }
};
export const reducers = combineReducers({
  tick,
})