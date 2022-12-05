import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {reducer} from './reducer/store';
import {loadState, saveState} from './loaclStorage/localStorage';
import {createStore} from 'redux';
import throttle from 'lodash/throttle';   // import only throttle !!!

const persistedState = loadState()
// combine states, so reducer state will be rewriten if state from localStorage comes
const store = createStore(reducer, persistedState)


// if state changes - we save state to localStorage
// JSON.stringify is expensive method, so we use throttle (lodash) method to call saveState no more than once in 1000ms
store.subscribe(throttle(() => {
    // save with some changes (we don't need editMode and currentValue)
    saveState({
        ...store.getState(),
        counter: {...store.getState().counter, isEditMode: false, currentValue: store.getState().counter.minValue}
    })
}, 1000))

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
