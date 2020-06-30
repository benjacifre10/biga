import React from 'react';

import styles from './Button.module.css';

const Button = ({kind, title, type, click}) => {
    let classes = [];
    let content = title;
    if (title.indexOf('icon') !== -1) content = <i className={title.substr(5)}></i>; 
    switch (kind) {
        case 'primary':
            classes.push(styles.btn, styles.btn_primary);
            break;
        case 'info':
            classes.push(styles.btn, styles.btn_info);
            break;
        case 'success':
            classes.push(styles.btn, styles.btn_success);
            break;
        case 'warning':
            classes.push(styles.btn, styles.btn_warning);
            break;
        case 'danger':
            classes.push(styles.btn, styles.btn_danger);
            break;
        default:
            classes.push(styles.btn);
            break;
    }

    return (
        <button 
            type={type} 
            className={classes.join(' ')}
            onClick={click}>
            {content}
        </button>
    );
};

export default Button;
