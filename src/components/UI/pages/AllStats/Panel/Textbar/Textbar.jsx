import React from 'react';
import './Textbar.css'

const Textbar = ({color, text}) => {
    return (
        <div className={`textbar ${color}`}>
        {text}
        </div>
    );
}

export default Textbar;
