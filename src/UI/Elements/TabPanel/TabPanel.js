import React, { useEffect, useRef } from 'react';

import styles from '../../../styles.module.css';

const TabPanel = ({
    orientation, 
    header,
    body}) => {

    const refTabPanel = useRef(null);
    const refTabPanelHeader = useRef(null);
    const refTabPanelIndicator = useRef(null);
    const refTabPanelBody = useRef(null);

    let headerTabs = null;
    let bodyTabs = null;

    const renderOrientation = () => {
        refTabPanelHeader.current = refTabPanel.current.children[0];
        refTabPanelHeader.current.childNodes.forEach(h => { 
            if (orientation === 'h') h.style.width = `calc(100% / ${body.length})`; 
        });
        refTabPanelIndicator.current = refTabPanel.current.children[1];
        refTabPanelBody.current = refTabPanel.current.children[2];
        if (orientation === 'h') refTabPanelIndicator.current.style.width = `calc(100% / ${header.length})`;
    
        refTabPanelHeader.current.childNodes.forEach((o, i) => {
            o.addEventListener("click", () => {
                refTabPanelHeader.current.childNodes.forEach(o2 => {
                    o2.classList.remove(orientation === 'h' ? styles.biga83__tabpanel__active : styles.biga83__tabpanelvertical__active);    
                });
                o.classList.add(orientation === 'h' ? styles.biga83__tabpanel__active : styles.biga83__tabpanelvertical__active);
                refTabPanelBody.current.childNodes.forEach(o3 => {
                    o3.classList.remove(orientation === 'h' ? styles.biga83__tabpanel__active : styles.biga83__tabpanelvertical__active);    
                });
                refTabPanelBody.current.childNodes[i].classList.add(orientation === 'h' ? styles.biga83__tabpanel__active : styles.biga83__tabpanelvertical__active);
                if (orientation === 'h') refTabPanelIndicator.current.style.left = `calc(calc(100% / ${header.length}) * ${i})`;
                else refTabPanelIndicator.current.style.top = `calc(80px + ${i*50}px)`;
            });
        });
    };

    headerTabs = header.map((h, i) => {
        return <div key={h.title} className={i === 0 ? orientation === 'h' ? styles.biga83__tabpanel__active : styles.biga83__tabpanelvertical__active : ""}>
            <i className={h.icon}></i> {h.title}
        </div>;
    });

    bodyTabs = body.map((b, i) => {
        return <div key={i} className={i === 0 ? orientation === 'h' ? styles.biga83__tabpanel__active : styles.biga83__tabpanelvertical__active : ""}>
            { orientation === 'v' ? b.icon ? <i className={b.icon}></i> : null : null }
            { b.title ? <h2>{b.title}</h2> : null }
            { typeof b.content === "string" ? <p>{b.content}</p> : b.content}
        </div>;
    });

    useEffect(() => {
        renderOrientation();
    }, []);

    return (
        <React.Fragment>
            <div ref={refTabPanel} className={orientation === 'h' ? styles.biga83__tabpanel : styles.biga83__tabpanelvertical}>
                <div className={orientation === 'h' ? styles.biga83__tabpanel__header : styles.biga83__tabpanelvertical__header}>
                    { headerTabs }
                </div>
                <div className={orientation === 'h' ? styles.biga83__tabpanel__indicator : styles.biga83__tabpanelvertical__indicator}></div>
                <div className={orientation === 'h' ? styles.biga83__tabpanel__body : styles.biga83__tabpanelvertical__body}>
                    { bodyTabs }
                </div>
            </div>
        </React.Fragment>
    );
};

export default TabPanel;
