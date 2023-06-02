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
        <button {...props} className='px-4 py-2 text-green-700 bg-white border rounded shadow hover:shadow-none'>{props.children}</button>
    )
}

export default Button;