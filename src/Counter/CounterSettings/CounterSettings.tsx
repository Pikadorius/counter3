import React, {ChangeEvent, useState} from 'react';
import {StateType} from "../../App";
import s from './CounterSettings.module.css'

type CounterSettingsType = {
    state: StateType
    setMinValue: (value: number) => void
    setMaxValue: (value: number) => void
}

const CounterSettings: React.FC<CounterSettingsType> = (props) => {

    const minValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMinValue(+e.currentTarget.value)
    }
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(+e.currentTarget.value)
    }

    // const inputMaxClass = props.state.maxValue > props.state.minValue ? s.input : `${s.input} ${s.inputError}`

    let inputMaxClass;
    if(props.state.maxValue>props.state.minValue && props.state.minValue>=0) inputMaxClass=`${s.input}`
    else inputMaxClass=`${s.input} ${s.inputError}`

    const classFunc = () => {
        if (props.state.minValue >= 0 && props.state.minValue < props.state.maxValue) {
            return `${s.input}`
        } else return `${s.input} ${s.inputError}`
    }
    const inputMinClass = classFunc();

    return (
        <div className={s.wrapper}>
            <div className={s.inputAndText}>Max. value: <input className={inputMaxClass} value={props.state.maxValue} type={'number'}
                                    onChange={maxValueHandler}/></div>
            <div className={s.inputAndText}>Min. value: <input className={inputMinClass} value={props.state.minValue} type={'number'}
                                    onChange={minValueHandler}/></div>
        </div>
    );
};

export default CounterSettings;