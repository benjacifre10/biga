import React from 'react';

import Button from '../Button/Button';

import styles from '../../../styles.module.css';

const Modal = (props) => {
    return (
        <React.Fragment>
            <div className={styles.biga83__info__modal_backdrop} onClick={props.onClose} />
            <div className={styles.biga83__info__modal}>
                <h3>{props.title}</h3>
                <div className={styles.biga83__info__modal_content}>{props.children}</div>
                <div className={styles.biga83__info__modal_actions}>
                    <Button type={'button'} kind={'info'} click={props.onClose} title={'icon fas fa-ban'}/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Modal;
