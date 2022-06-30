import React, { useState, useEffect, useRef } from 'react';

import styles from '../../../../styles.module.css';

const Title = (props) => {

    let title = [];
    let char = 0;
    let timer = null;
    const [mensaje, setMensaje] = useState(null);
    const refTitle = useRef(null);
    const refTitleChilds = useRef(null);
    
    useEffect(() => {
        title = props.title.split("");
        setMensaje(title.map((t, i) => {
            return <span key={i}>{t}</span>
        })); 
    }, []);
    
    useEffect(() => {
        refTitleChilds.current = refTitle.current.childNodes;
        timer = setInterval(onTick, 50);
    }, [mensaje]);
    
    
    const onTick = () => {
        refTitleChilds.current[char].classList.add(styles.biga83__progrid__title_fade);
        char++;
        if (char === refTitleChilds.current.length) {
            complete();
            return;
        }
    };
    
    const complete = () => {
        clearInterval(timer);
        timer = null;
    }

    return (
        <React.Fragment>
            <h3 ref={refTitle} className={styles.biga83__progrid__title}>{mensaje}</h3>
        </React.Fragment>
    );
};

export default Title;
