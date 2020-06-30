import React from 'react'

import styles from './SimpleTable.module.css';

const SimpleTable = ({ data }) => {
    
    let keysRows = Object.keys(data[0]);
    let newHeadersRows = keysRows.map(h => {
        if(typeof h !== 'string') return ''
        return h.charAt(0).toUpperCase() + h.slice(1);
    });

    return (
        <div className={styles.st__wrapper}>
            <div className={styles.st__table}>
                <div className={[styles.st__row, styles.st__header].join(' ')}>
                    { newHeadersRows.map((h, i) => {
                        return <div className={styles.st__cell} key={i}>
                            { h }
                        </div>
                    })}
                </div>
                {data.map((r, i) => {
                    return <div className={styles.st__row} key={i}>
                        {Object.values(r).map((cell, i) => {
                            return <div className={styles.st__cell} key={i} data-title={Object.keys(r)[i].charAt(0).toUpperCase() + Object.keys(r)[i].slice(1)}>
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
