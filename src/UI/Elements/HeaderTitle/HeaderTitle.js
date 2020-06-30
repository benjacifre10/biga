import React from 'react';

import styles from './HeaderTitle.module.css';

const HeaderTitle = ({ title }) => {
    return (
        <div className={styles.header}>
            <h1>{ title }</h1>
        </div>
    );
};

export default HeaderTitle;
