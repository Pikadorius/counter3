import React from 'react';
import Button from "../../Button/Button";
import {StateType} from "../../App";
import s from './CounterButtons.module.css'

type CounterButtons = {
    state: StateType
    isEditMode: boolean
    setEditMode: (isEditMode:boolean)=>void
    increase: ()=>void
    reset: ()=>void
    setValue: ()=>void
}

const CounterButtons = (props: CounterButtons) => {

    const setEditMode = () => {
        props.setEditMode(props.isEditMode)
    }


    return (
        <div className={s.wrapper}>
            {props.isEditMode ?
                <div>
                    <Button name={"Set"} onClick={setEditMode}/>
                </div>
                :
                <div className={s.buttonArea}>
                    <Button
                        name={"Inc"}
                        onClick={props.increase}
                        disabled={props.state.currentValue===props.state.maxValue || props.state.error==="Incorrect value!"}/>
                    <Button
                        name={"Reset"}
                        onClick={props.reset}
                        disabled={props.state.currentValue===props.state.minValue || props.state.error==="Incorrect value!"}/>
                    <Button
                        name={"Set"}
                        onClick={()=>props.setEditMode(props.isEditMode)}/>
                </div> }
        </div>
    );
};

export default CounterButtons;