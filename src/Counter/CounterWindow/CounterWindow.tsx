import React from 'react';
import {ErrorType} from "../../App";
import s from './CounterWindow.module.css'

type CounterWindowType = {
    value: number | ErrorType
    maxValue: number
}

const CounterWindow = (props: CounterWindowType) => {

    let valueClass=s.value
    if(props.value==='Incorrect value!' || props.value===props.maxValue) valueClass+=` ${s.valueError}`
    return (
        <div className={s.wrapper}>
            <div className={valueClass}>{props.value}</div>
        </div>
    );
};

export default CounterWindow;