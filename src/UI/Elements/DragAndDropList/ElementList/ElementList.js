import React from 'react';

const ElementList = (props) => {

    const dragStart = (e) => {
        e.dataTransfer.setData('biga83__dad__element_id', e.target.id);
    };

    const dragOver = (e) => {
        e.stopPropagation();
    }

    return (
        <div 
            id={props.id} 
            className={ props.className } 
            draggable={ props.draggable } 
            onDragStart={ dragStart } 
            onDragOver={ dragOver }
        >
            { props.children }
        </div>
    );
};

export default ElementList;
