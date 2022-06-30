import React, { useState, useEffect } from 'react';

import Button from '../../Button/Button';

import styles from '../../../../styles.module.css';

const Header = () => {
    const [optionsClass, setOptionsClass] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        setOptionsClass([...optionsClass, styles.biga83__progrid__header_option]);
    }, []);

    const showOptions = (show) => {
        if (show) setOptionsClass([...optionsClass, styles.biga83__progrid__header_option_open]);
        else setOptionsClass([optionsClass.filter(option => option !== styles.biga83__progrid__header_option_open)]);
    };

    const configOptions = () => {
        console.log('show config');
        setModalShow(true);
    }
    return (
        <React.Fragment>
            { modalShow ? <div className={styles.biga83__progrid__modal}>
                <h3>Holanda</h3>
                <div className={styles.biga83__progrid__modal_content}>hello</div>
                <div className={styles.biga83__progrid__modal_actions}>
                    <Button type={'button'} kind={'info'} click={() => setModalShow(false)} title={'icon fas fa-ban'}/>
                </div>
            </div> : null
            }
            <div className={styles.biga83__progrid__header} >
                <i onClick={() => showOptions(true)} className="fas fa-ellipsis-h"></i>
                <div className={optionsClass.join(' ')}>
                    <div className={styles.biga83__progrid__header_options}>
                        <div>
                            <i onClick={() => showOptions(false)} className="fas fa-ellipsis-v"></i>
                            <i onClick={configOptions}className="fas fa-cog"></i>
                        </div>
                        <div className={styles.biga83__progrid__header_search_segment}>
                            <div className={styles.biga83__progrid__header_search_box}>
                                <input className={styles.biga83__progrid__header_search_text} type="text" name="" placeholder="Buscar" />
                                <div className={styles.biga83__progrid__header_search_btn}>
                                    <i className="fas fa-search"></i>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
