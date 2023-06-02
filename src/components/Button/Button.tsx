import React from 'react';
import "../../../styles/index.css";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /*
    * Button contents
    */
    children: React.ReactNode; 
}

const Button = (props: ButtonProps) => {
    return (
        <button {...props} className='bg-red-500'>{props.children}</button>
    )
}

export default Button;