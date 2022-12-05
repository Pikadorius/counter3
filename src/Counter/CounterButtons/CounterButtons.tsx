import React from 'react';
import Button from "../../Button/Button";
import s from './CounterButtons.module.css'
import {InitialStateType} from '../../reducer/counterReducer';

type CounterButtons = {
    state: InitialStateType
    setEditMode: (isEditMode: boolean) => void
    increase: () => void
    reset: () => void
}

const CounterButtons = (props: CounterButtons) => {

    const setEditMode = () => {
        props.setEditMode(props.state.isEditMode)
    }


    return (
        <div className={s.wrapper}>
            {props.state.isEditMode ?
                <div>
                    <Button name={"Set"} onClick={setEditMode}/>
                </div>
                :
                <div className={s.buttonArea}>
                    <Button
                        name={"Inc"}
                        onClick={props.increase}
                        disabled={props.state.currentValue === props.state.maxValue || props.state.error === "Incorrect value!"}/>
                    <Button
                        name={"Reset"}
                        onClick={props.reset}
                        disabled={props.state.currentValue === props.state.minValue || props.state.error === "Incorrect value!"}/>
                    <Button
                        name={"Set"}
                        onClick={setEditMode}/>
                </div>}
        </div>
    );
};

export default CounterButtons;