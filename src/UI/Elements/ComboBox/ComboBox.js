import React, { useState, useEffect, useRef } from 'react';

import styles from '../../../styles.module.css';

const ComboBox = ({ value, changed, options }) => {
    let backgroundTheme = {background: options.background};
    let borderTheme = {border: `8px solid ${options.background === 'white' ? 'lightgray' : options.background}`};
    const [dataCombo, setDataCombo] = useState([]);
    const [valueCombo, setValueCombo] = useState('');
    const refCombobox = useRef(null);
    const refSelected = useRef(null);
    const refOptionsContainer = useRef(null);
    const refSearchbox = useRef(null);
    const refOptionsList = useRef(null);

    useEffect(() => {
        if (dataCombo.length === 0) {
            let key = null;
            let text;
            setDataCombo(options.data.map((cb, i) => {
                text = [];
                Object.keys(cb).forEach(k => {
                    if (options.key === k) key = cb[k];
                    options.text.forEach(t => {
                        if (t === k) text.push(cb[k]);
                    });
                });
                return (<div key={options.title + key} className={styles.biga83__combobox__option}>
                    <input type="radio" className={styles.biga83__combobox__option_radio} id={options.title + key} name={key} />
                    <label htmlFor={key}>{text.join(' ')}</label>
                </div>);
            }));
        }
    }, []);

    useEffect(() => {
        if (valueCombo !== '') {
            changed(options.title, valueCombo);
        }
    }, [valueCombo]);
    
    useEffect(() => {
        refOptionsContainer.current = refCombobox.current.children[0];
        refSelected.current = refCombobox.current.children[1];
        refSearchbox.current = refCombobox.current.children[2];
        refOptionsList.current = refOptionsContainer.current.childNodes;
        
        refOptionsList.current.forEach(o => {
            o.addEventListener("click", () => {
                setValueCombo(o.querySelector("label").htmlFor);
                refSelected.current.innerHTML = o.querySelector("label").innerHTML;
                refSelected.current.classList.add(styles.biga83__combobox__selected_icon);
                refOptionsContainer.current.classList.remove(styles.biga83__combobox__active);
            });
        });
        if (value) {
            refOptionsList.current.forEach(o => {
                if (value == o.querySelector("label").htmlFor) {
                    setValueCombo(o.querySelector("label").htmlFor);
                    refSelected.current.innerHTML = o.querySelector("label").innerHTML;
                    refSelected.current.classList.add(styles.biga83__combobox__selected_icon);
                    refOptionsContainer.current.classList.remove(styles.biga83__combobox__active);
                }
            });    
        }
        if (dataCombo.length === 0 && value) {
            refSelected.current.innerHTML = value;
        }
    }, [dataCombo]);
    
    const displayOptions = () => {
        refOptionsContainer.current.classList.toggle(styles.biga83__combobox__active);
        refSearchbox.current.value = "";
        filterList("");
        if (refOptionsContainer.current.classList.contains(styles.biga83__combobox__active)) {
            refSearchbox.current.focus();
        }
    };

    const filterList = searchTerm => {
        searchTerm = searchTerm.toLowerCase();
        refOptionsList.current.forEach(option => {
            let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
            if (label.indexOf(searchTerm) != -1) {
            option.style.display = "block";
            } else {
            option.style.display = "none";
            }
        });
    };
    
    return (
        <React.Fragment>
            <div className={options.disabled ? styles.biga83__combobox__disabled_cursor : null}>
                <div ref={refCombobox} id={options.key} className={options.disabled ? [styles.biga83__combobox, styles.biga83__combobox__disabled].join(' ') : styles.biga83__combobox }>
                    <div className={styles.biga83__combobox__options_container} style={backgroundTheme}>
                        { dataCombo }
                    </div>
                    <div 
                        className={styles.biga83__combobox__selected} 
                        onClick={displayOptions} 
                        value={valueCombo} 
                        style={backgroundTheme} 
                        onChange={(e) => changed(e)}>
                        Seleccionar {options.title}
                        <i className="fas fa-arrow-down"></i>
                    </div>                
                    <div className={styles.biga83__combobox__searchbox} onKeyUp={(e) => filterList(e.target.value)}>
                        <input type="text" placeholder="Buscar..." style={borderTheme}/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ComboBox;
