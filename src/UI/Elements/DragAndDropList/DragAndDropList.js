import React from 'react';

import styles from '../../../styles.module.css';

import List from './List/List';
import ElementList from './ElementList/ElementList';

const DragAndDropList = ({ dataInitial, dataFinal }) => {
    let result1, result2;

    if (dataFinal !== null) {
        result1 = dataInitial.filter(d => !dataFinal.includes(d.id));
        result2 = dataInitial.filter(d => dataFinal.includes(d.id));
    }
    
    return (
        <div className={styles.biga83__dragdroplist}>
            <List id="biga83__dad__list_1" className={styles.biga83__dragdroplist__list}>
                {dataFinal !== null ?
                    result1.map(d => {
                        return <ElementList id={ d.id } key={ d.id } className={styles.biga83__dragdroplist__element} draggable="true" >
                            { d.nombre }
                        </ElementList>
                    }) :
                    dataInitial.map(d => {
                        return <ElementList id={ d.id } key={ d.id } className={styles.biga83__dragdroplist__element} draggable="true" >
                            { d.nombre }
                        </ElementList>
                    })
                }
            </List>
            <List id="biga83__dad__list_2" className={styles.biga83__dragdroplist__list}>
                {dataFinal !== null ?
                    result2.map(d => {
                        return <ElementList id={ d.id } key={ d.id } className={styles.biga83__dragdroplist__element} draggable="true" >
                            { d.nombre }
                        </ElementList>
                    }) :
                    null
                }
            </List>    
        </div>
    );
};

export default DragAndDropList;
