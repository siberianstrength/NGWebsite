import React, { useEffect, useState } from 'react';
import './Square.css'
import BarCh from './BarCh';
import { ReactComponent as Icon } from '../../../../../Assets/i.svg'; 
import RightArrow from '../../../../../Assets/right-arrow.png'; 
import Modal from '../../../../../ModalWindow/Modal'

const adjustLabels = (id, type) => {
  const cardElement = document.querySelector(`.card-${id}-${type}`);
  if (!cardElement) return;
  if (cardElement.alreadySelected === 2) return;

  const bars = cardElement.querySelectorAll('.MuiBarElement-root');
  const labels = cardElement.querySelectorAll('.MuiBarLabel-root');
 
  const barLengths = [];
  const barHeight = ['55px', '85px'];   
  const values = [];

  bars.forEach(bar => { 
    const width = bar.style.width; 
    const numericWidth = parseFloat(width);
    barLengths.push(numericWidth);

  })

  labels.forEach(label => {
    values.push(label.textContent.trim());
  })
  
  let labelContainer = document.createElement('div');
  labelContainer.className = 'custom-label-container';
  
  for (let i = 0; i < 2; i ++) {
    const newLabel = document.createElement('div');
    newLabel.className = 'custom-label';
    newLabel.textContent = values[i];

    newLabel.style.position = 'absolute'; 
    newLabel.style.left = barLengths[i] + 55 + 'px';      
    newLabel.style.top = barHeight[i]; 
    newLabel.style.fontSize = '19px'; 
    newLabel.style.fontWeight = 'bold';
  
    labelContainer.appendChild(newLabel);
  }
  
  cardElement.alreadySelected = 2;

  cardElement.querySelector('.card-bar').appendChild(labelContainer);
  
};

const removeBarLabels = (id, type) => {
  const cardElement = document.querySelector(`.card-${id}-${type}`);
  const labels = cardElement.querySelectorAll('.MuiBarLabel-root')
  labels.forEach((label) => {
    label.remove(); 
  })
}

const getIncDecColor = (delta) => {
  switch (delta) {
      case '+':
          return 'inc'
      case '-':
          return 'dec'
      default:
          return 'dec'
  }
}

const getIncDec = (delta) => {
  switch (delta) {
      case '+':
          return '▲'
      case '-':
          return '▼'
      default:
          return ''
  }
}

const Square = ({id, colorClass, data, type}) => {
  const [modal, setModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      adjustLabels(id, type); 
      removeBarLabels(id, type);
    }, 10);

    return () => clearTimeout(timer);
  }, []); 

   
    return ( 
        <div className={`card card-${id}-${type} ${colorClass}`}>
          <div className="card-header">
            <span className='line-vertical-upper'></span> 
            <span className='line-vertical-lower'></span> 
            <span className="card-index">{id + 1}</span>
            <span className="card-title">
              {data.desc}
            </span>
            <Icon className='card-icon' width={20} height={20} onClick={() => setModal(true)}/>
          </div>  
        <div className="card-bar">
            <BarCh colorClass={colorClass} data={data}/>
        </div>
          <div className="card-content">
            <div className="card-value">{data.value}</div>
            <div className="card-percentage">
              <span className={`delta ${getIncDecColor(data.delta[0])}`}>{`${getIncDec(data.delta[0])}` + data.delta}</span>
            </div>
          </div>
            <div>
            <img src={RightArrow} className='arrow'/>
          </div>
        </div>
      );
    };

export default Square;