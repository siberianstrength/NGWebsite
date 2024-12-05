import React, { useRef } from 'react';
import Square from './SquareComponent/Square';
import './Row.css'

const Row = ({colorClass, data, type}) => {
    return (
        <div className ='row'>
            {Object.keys(data).map((card, index) =>
            <Square 
                colorClass={colorClass} 
                data={data[card]}
                key={index}
                id={index}
                type={type}
            />)}
        </div>
    );
}

export default Row;