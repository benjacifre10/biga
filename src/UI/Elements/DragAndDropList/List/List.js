import React from 'react';

const List = (props) => {
    const drop = (e) => {
        e.preventDefault();
        const element_id = e.dataTransfer.getData('biga83__dad__element_id');
        const element = document.getElementById(element_id);
        e.target.appendChild(element);
    };

    const dragOver = (e) => {
        e.preventDefault();
    };

    return (
        <div 
            id={props.id } 
            onDrop={ drop } 
            onDragOver={ dragOver } 
            className={ props.className }
        >
            { props.children }    
        </div>
    );
};

export default List;
