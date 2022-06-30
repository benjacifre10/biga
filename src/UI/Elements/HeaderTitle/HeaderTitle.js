import React from 'react';

import styles from '../../../styles.module.css';

const HeaderTitle = ({ title, color }) => {
    let colorTheme = {color: color};
    return (
        <div className={styles.biga83__header} style={colorTheme}>
            <h1>{ title }</h1>
        </div>
    );
};

export default HeaderTitle;
