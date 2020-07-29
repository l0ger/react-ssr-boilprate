import  { Task } from 'redux-saga';
import { Store, AnyAction } from 'redux';


export interface Action extends AnyAction {
    payload?: any
}

export interface ActionCreator {
    (payload?: object): Action;
}

export interface State {
    tick: string;
}


export interface Reducer {
    (prevState: State, action: Action): State;
}


export interface SagaStore extends Store {
    sagaTask: Task;
}