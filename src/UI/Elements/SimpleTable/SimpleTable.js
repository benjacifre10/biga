import React from 'react'

import styles from '../../../styles.module.css';

const SimpleTable = ({ data }) => {
    
    let keysRows = Object.keys(data[0]);
    let newHeadersRows = keysRows.map(h => {
        if(typeof h !== 'string') return ''
        return h.charAt(0).toUpperCase() + h.slice(1);
    });

    return (
        <div className={styles.biga83__simpletable__wrapper}>
            <div className={styles.biga83__simpletable__table}>
                <div className={[styles.biga83__simpletable__table_row, styles.biga83__simpletable__table_header].join(' ')}>
                    { newHeadersRows.map((h, i) => {
                        return <div className={styles.biga83__simpletable__table_row_cell} key={i}>
                            { h }
                        </div>
                    })}
                </div>
                {data.map((r, i) => {
                    return <div className={styles.biga83__simpletable__table_row} key={i}>
                        {Object.values(r).map((cell, i) => {
                            return <div className={styles.biga83__simpletable__table_row_cell} key={i} data-title={Object.keys(r)[i].charAt(0).toUpperCase() + Object.keys(r)[i].slice(1)}>
                                {cell}
                            </div>
                        })}
                    </div>
                })}
            </div>
        </div>
    );
};

export default SimpleTable;
