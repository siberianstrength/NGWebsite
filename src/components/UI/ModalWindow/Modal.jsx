import React from 'react';
import c from './Modal.css'

const Modal = ({data, visible, setVisible}) => {
    const rootClasses = [c.ModalWindow]
    if (visible) {
        rootClasses.push(c.active)
    }

    return (
        <div className={'ModalWindow'} onClick={() => setVisible(false)}>
            <div onClick={(e) => e.stopPropagation()}>
            pass
            </div>
        </div>
    );
}

export default Modal;