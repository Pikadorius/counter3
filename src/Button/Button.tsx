import React from 'react';
import s from './Button.module.css'

type ButtonType = {
    name: string
    onClick: ()=>void
    disabled?: boolean
}

const Button: React.FC<ButtonType> = ({name, onClick,disabled}) => {
    return (
        <div>
            <button className={s.btn} onClick={onClick} disabled={disabled}>{name}</button>
        </div>
    );
};

export default Button;