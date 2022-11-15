import React from 'react';
import CounterWindow from "./CounterWindow/CounterWindow";
import CounterSettings from "./CounterSettings/CounterSettings";
import CounterButtons from "./CounterButtons/CounterButtons";
import {StateType} from "../App";
import s from './Counter.module.css'

type CounterType = {
    state: StateType
    increase: () => void
    reset: () => void
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
    setEditMode: (isEditMode: boolean) => void
}

const Counter: React.FC<CounterType> = (props) => {


    return (
        <div className={s.wrapper}>
            <div className={s.windowArea}>
                {props.state.isEditMode ?
                <CounterSettings
                    state={props.state}
                    setMinValue={props.setMinValue}
                    setMaxValue={props.setMaxValue}/>
                :
                <CounterWindow
                    value={props.state.error === 'Incorrect value!' ? props.state.error : props.state.currentValue}
                    maxValue={props.state.maxValue}/>
            }
            </div>
            <div className={s.buttonsArea}>
                <CounterButtons
                state={props.state}
                isEditMode={props.state.isEditMode}
                setEditMode={props.setEditMode}
                increase={props.increase}
                reset={props.reset}
                setValue={() => {
                }}/>
            </div>
        </div>
    );
};

export default Counter;