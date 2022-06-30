import React from 'react';

import styles from '../../../styles.module.css';

const InputText = ({onChangeInputHandler, title, icon, value, type}) => {

    return (
        <div className={type ? [styles.biga83__input__form_container, styles.biga83__input__center].join(' ') : styles.biga83__input__form_container}>
            <div className={type ? styles.biga83__input__form : styles.biga83__input__search}>
                <input type="text" name="name" autoComplete="off" onChange={onChangeInputHandler} value={value} required />
                <label htmlFor="name" className={styles.biga83__input__label_name}>
                    <span className={styles.biga83__input__content_name}>{ title }</span>
                </label>
            </div>
            {icon ?
                <div className={type ? styles.biga83__input__form_icon : styles.biga83__input__search_icon}>
                    <i className={ icon }></i>
                </div> : null
            }
        </div>
    );
};

export default InputText;
