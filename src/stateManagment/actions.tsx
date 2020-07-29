
import { ActionCreator } from '../types/state';
export const toDoActionConstants = {
    "TODO_LIST_REQUEST": "TODO_LIST_REQUEST",
    "TODO_LIST_SUCCESS": "TODO_LIST_SUCCESS",
    "TODO_LIST_FAILURE": "TODO_LIST_FAILURE",
}

let toDoListRequest: ActionCreator = function () {
    return {
        type: toDoActionConstants.TODO_LIST_REQUEST
    }
};

let toDoListSuccess: ActionCreator = function (payload) {
    return {
        type: toDoActionConstants.TODO_LIST_SUCCESS,
        payload
    }
};

let toDoListFaiure: ActionCreator = function (payload) {
    return {
        type: toDoActionConstants.TODO_LIST_FAILURE,
        payload
    }
}

export const toDoActions = {
    toDoListRequest,
    toDoListSuccess,
    toDoListFaiure
}