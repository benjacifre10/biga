import React from 'react';

import styles from './InputText.module.css';

const InputText = ({onChangeInputHandler, title, icon, value, type}) => {

    return (
        <div className={type ? [styles.input__form_container, styles.center].join(' ') : styles.input__form_container}>
            <div className={type ? styles.input__form : styles.input__search}>
                <input type="text" name="name" autoComplete="off" onChange={onChangeInputHandler} value={value} required />
                <label htmlFor="name" className={styles.label_name}>
                    <span className={styles.content_name}>{ title }</span>
                </label>
            </div>
            {icon ?
                <div className={type ? styles.input__form_icon : styles.input__search_icon}>
                    <i className={ icon }></i>
                </div> : null
            }
        </div>
    );
};

export default InputText;
