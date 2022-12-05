import {combineReducers, createStore} from 'redux';
import {counterReducer} from './counterReducer';

const reducer = combineReducers({
        counter: counterReducer
    }
)
export type CounterType=ReturnType<typeof reducer>


export const store = createStore(reducer)

// @ts-ignore
window.store=store