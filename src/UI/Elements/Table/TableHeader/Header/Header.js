import React from 'react';

import styles from '../../../../../styles.module.css';

const Header = ({ 
    name,
    hidden }) => {

    let classes = '';
    if (hidden.includes(name.charAt(0).toLowerCase() + name.slice(1))) classes = styles.biga83__table__header_th_nodisplay;

    return (
        <th className={classes}>
            { name }
        </th>
    );
}

export default Header;
