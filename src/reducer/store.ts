import {combineReducers, legacy_createStore} from 'redux';
import {counterReducer} from './counterReducer';

export const reducer = combineReducers({
        counter: counterReducer
    }
)
export type AppRootType = ReturnType<typeof reducer>


export const store = legacy_createStore(reducer)

// @ts-ignore
window.store = store