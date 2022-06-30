import React from 'react';

import styles from '../../../styles.module.css';

const Button = ({kind, title, type, click, style}) => {
    let classes = [];
    let content = title;
    if (title.indexOf('icon') !== -1) content = <i className={title.substr(5)}></i>; 
    switch (kind) {
        case 'primary':
            classes.push(styles.biga83__btn, styles.biga83__btn_primary);
            break;
        case 'info':
            classes.push(styles.biga83__btn, styles.biga83__btn_info);
            break;
        case 'success':
            classes.push(styles.biga83__btn, styles.biga83__btn_success);
            break;
        case 'warning':
            classes.push(styles.biga83__btn, styles.biga83__btn_warning);
            break;
        case 'danger':
            classes.push(styles.biga83__btn, styles.biga83__btn_danger);
            break;
        default:
            classes.push(styles.biga83__btn);
            break;
    }

    return (
        <button 
            type={type} 
            className={classes.join(' ')}
            style={style}
            onClick={click}>
            {content}
        </button>
    );
};

export default Button;
