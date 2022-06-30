import React from 'react';

import Header from './Header/Header';

import styles from '../../../../styles.module.css';

const TableHeader = ({ 
    headerNames,
    hidden,
    kind }) => {

    let newHeaders = headerNames.map(h => {
        if(typeof h !== 'string') return ''
        return h.charAt(0).toUpperCase() + h.slice(1);
    });
    return (
        <tr className={styles.biga83__table__header}>
            { kind !== 's' ? (kind !== 'i' ? <th>Acciones</th> : null) : null }
            { newHeaders.map(h => {
                return <Header 
                    name={ h } 
                    key={ h } 
                    hidden={ hidden }
                />;
            })}
        </tr>
    );
};

export default TableHeader;
