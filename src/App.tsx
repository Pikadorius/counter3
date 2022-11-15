import React, {useEffect, useState} from 'react';
import './App.css';
import Counter from "./Counter/Counter";

export type ErrorType = '' | 'Incorrect value!'
export type StateType = {
    minValue: number
    maxValue: number
    currentValue: number
    error: ErrorType
    isEditMode: boolean
}

function App() {

    const [state, setState] = useState<StateType>(() => {
        let localState = localStorage.getItem('state')
        if (localState) {
            let localSt = localState && JSON.parse(localState)
            return {...localSt, currentValue: localSt.minValue, isEditMode: false}
        } else return {minValue: 0, currentValue: 0, maxValue: 5, error: '', isEditMode: false}
    })

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(state))
    }, [state])

    const increase = () => {
        state.currentValue < state.maxValue && setState({...state, currentValue: state.currentValue + 1, error: ''})
    }

    const reset = () => {
        setState({...state, currentValue: state.minValue, error: ''})
    }

    const setEditMode = (isEditMode: boolean) => {
        setState({...state, isEditMode: !isEditMode})
    }

    const setMinValue = (minValue: number) => {
        if (minValue >= 0 && minValue < state.maxValue) {
            setState({...state, minValue: minValue, currentValue: minValue, error: ''})
        } else setState({...state, minValue, currentValue: state.minValue, error: "Incorrect value!"})
    }

    const setMaxValue = (maxValue: number) => {
        if (maxValue > state.minValue && state.minValue >= 0) {
            setState({...state, maxValue, currentValue: state.minValue, error: ''})
        } else setState({...state, maxValue, currentValue: state.minValue, error: "Incorrect value!"})
    }


    return (
        <div className="App">
            <Counter
                state={state}
                increase={increase}
                reset={reset}
                setMinValue={setMinValue}
                setMaxValue={setMaxValue}
                setEditMode={setEditMode}/>
        </div>
    );
}

export default App;