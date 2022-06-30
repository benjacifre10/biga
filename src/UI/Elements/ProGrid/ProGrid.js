import React, { useState, useEffect } from 'react';

import Title from './Title/Title';
import Header from './Header/Header';

import styles from '../../../styles.module.css';

const ProGrid = ({ config }) => {
    return (
        <React.Fragment>
            <Title title={config.title}/>
            <div className={styles.biga83__progrid__container}>
                <Header />
                <div className={styles.biga83__progrid__main} >main</div>
                <div className={styles.biga83__progrid__footer} >footer</div>
            </div>
        </React.Fragment>
    );
};

export default ProGrid;
