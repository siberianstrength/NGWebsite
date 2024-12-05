import React, { useEffect } from 'react';
import Row from './Row/Row';
import Textbar from './Textbar/Textbar';
import './Panel.css'
import { cards } from '../cardsData'

const Panel = () => {

    const getColor = (text) => {
        switch (text) {
            case 'Сообщения':
                return 'color-orange'
            case 'Ответы':
                return 'color-red'
            case 'Пользователи':
                return 'color-aqua'
            case 'Сигналы':
                return 'color-purple'
            default:
                return 'error'
        }
    }

    return (
        <div>
            {Object.keys(cards).map((text) =>
            <div>
                <div>
                    <Textbar color={getColor(text)} text={text.toUpperCase()}/>
                </div>
                <div className='Panel'>
                    <Row colorClass={getColor(text)} type={text} data={cards[text]}></Row>  
                </div>
            </div>
        )}
        </div>
    );
}

export default Panel;