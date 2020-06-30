import React from 'react';

import Button from '../Button/Button';

import styles from './Modal.module.css';

const Modal = (props) => {
    return (
        <React.Fragment>
            <div className={styles.backdrop} onClick={props.onClose} />
            <div className={styles.info_modal}>
                <h3>{props.title}</h3>
                <div className={styles.modal__content}>{props.children}</div>
                <div className={styles.info_modal__actions}>
                    <Button type={'button'} kind={'info'} click={props.onClose} title={'icon fas fa-ban'}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;
