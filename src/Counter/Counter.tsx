import React from 'react';
import CounterWindow from "./CounterWindow/CounterWindow";
import CounterSettings from "./CounterSettings/CounterSettings";
import CounterButtons from "./CounterButtons/CounterButtons";
import s from './Counter.module.css'
import {
    editModeAC,
    increaseAC,
    InitialStateType,
    resetAC,
    setMaxValueAC,
    setMinValueAC
} from '../reducer/counterReducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootType} from '../reducer/store';
const Counter: React.FC = () => {

    const state = useSelector<AppRootType, InitialStateType>(state => state.counter)
    const dispatch = useDispatch()

    const increase = () => {
        dispatch(increaseAC())
    }

    const reset = () => {
        dispatch(resetAC())
    }

    const setEditMode = (isEditMode: boolean) => {
        dispatch(editModeAC(isEditMode))
    }

    const setMinValue = (minValue: number) => {
        dispatch(setMinValueAC(minValue))
    }

    const setMaxValue = (maxValue: number) => {
        dispatch(setMaxValueAC(maxValue))
    }


    return (
        <div className={s.wrapper}>
            <div className={s.windowArea}>
                {
                    state.isEditMode
                        ? <CounterSettings
                            state={state}
                            setMinValue={setMinValue}
                            setMaxValue={setMaxValue}/>
                        : <CounterWindow
                            value={state.error === 'Incorrect value!' ? state.error : state.currentValue}
                            maxValue={state.maxValue}/>
                }
            </div>
            <div className={s.buttonsArea}>
                <CounterButtons
                    state={state}
                    setEditMode={setEditMode}
                    increase={increase}
                    reset={reset}/>
            </div>
        </div>
    );
};

export default Counter;