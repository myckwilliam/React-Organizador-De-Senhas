import React from 'react';

import './Button.css'

const Button = ({children, color, onClick}) => {
    return ( 
        <button className="button" style={{backgroundColor: {color}}}>
            {children}
        </button>
     );
}
 
export default Button;