import React, { useState, useEffect } from 'react';

import styles from '../../../../../styles.module.css';

const Rows = ({ 
    type, 
    row, 
    extraData, 
    keyId,
    kind, 
    hidden, 
    updateItem, 
    deleteItem,
    formInputs }) => {

    const [tds, setTds] = useState([]);
    let values = Object.values(row);
    let keys = Object.keys(row);

    useEffect(() => {
        setTds(values.map((v, i) => {
            if (hidden.includes(keys[i])) {
                return <td 
                    className={styles.biga83__table__rows_td_nodisplay} 
                    style={{margin: '10px 0px'}} 
                    key={i}>{ v }
                </td>;
            } else {
                let band = true;
                if (extraData.length > 0) {
                    let value = null;
                    extraData.forEach(e => {
                        if (Object.keys(e).includes(keys[i])) {
                            value = findValue(keys[i], v, i);
                            band = false;
                        } 
                    });
                    if (value) {
                        return <td 
                            style={{margin: '10px 0px'}} 
                            key={i}>{ value }
                        </td>;
                    }
                }
                if (band) {
                    if (isValidDate(v)) {
                        let type = '';
                        formInputs.forEach((f, j) => {
                            if (Object.keys(f)[0] === keys[i]) type = Object.values(f)[0]; 
                        });
                        let value = convertToDate(new Date(v), type);
                        return <td 
                            style={{margin: '10px 0px'}} 
                            key={i}>{ value }
                        </td>;
                    } else {
                        return <td 
                            style={{margin: '10px 0px'}} 
                            key={i}>{ v ? v : '' }
                        </td>;
                    }
                }
            }
        }));
    }, [row]);

    const isValidDate = (d) => {
        if (d && isNaN(d)) {
            if ((new Date(d)) instanceof Date && !isNaN(new Date(d))) return true;
            else return false;
        } else return false;
    };

    const redirectDetail = (id) => {
        if (id) history.push(`/${type}/${id}`, {id: id});
    };

    let options = [];
    if (kind.includes('f')) {
        options.push(<i key={1}
            className={["fas fa-info", styles.biga83__table__rows_td_icon_green].join(' ')} 
            onClick={() => redirectDetail(row.id)}>
        </i>);
    }
    if (kind.includes('e')) {
        options.push(<i key={2}
            className={["fas fa-edit", styles.biga83__table__rows_td_icon_blue].join(' ')} 
            onClick={() => updateItem(type, row)}>
        </i>);
    }
    if (kind.includes('d')) {
        options.push(<i key={3}
            className={["fas fa-trash-alt", styles.biga83__table__rows_td_icon_red].join(' ')} 
            onClick={() => deleteItem('d', row)}>
        </i>);
    };

    const findValue = (key, value, index) => {
        let exitValue = ' ';
        let band = false;
        formInputs.forEach((fi, i) => {
            let valueInputs = Object.values(fi);
            let keyInputs = Object.keys(fi);
            if (Array.isArray(valueInputs[0])) {
                extraData.forEach(ed => {
                    let valueExtra = Object.values(ed);
                    let keyExtra = Object.keys(ed);
                    if (keyExtra[0] === key && keyExtra[0] === keyInputs[0]) {
                        band = true;
                        valueExtra[0].forEach((ve, k) => {
                            let veValue = Object.values(ve);
                            let veKey = Object.keys(ve);
                            veKey.forEach((vv, vi) => {
                                if (vv === valueInputs[0][1]) {
                                    if (veValue[vi] === value) {
                                        valueInputs[0][2].forEach((va, va2) => {
                                            exitValue += `${ve[va]} `;
                                        });
                                    } 
                                }
                            });
                        });
                    }
                });
            }
        });
        if (!band) exitValue = value;
        return exitValue;
    }

    const convertToDate = (d, type) => {
        const isMayor = (d) => d < 9 ? `0${d}` : `${d}`;
        d.setTime(d.getTime() + d.getTimezoneOffset()*60*1000);
        let date;
        switch (type) {
            case 'datetime':
                date = `${isMayor(d.getDate())}/${isMayor(d.getMonth() + 1)}/${isMayor(d.getFullYear())}
                        ${isMayor(d.getHours())}:${isMayor(d.getMinutes())}:${isMayor(d.getSeconds())}`;
                return date;
            case 'date':
                date = `${isMayor(d.getDate())}/${isMayor(d.getMonth() + 1)}/${isMayor(d.getFullYear())}`;
                return date;
            default:
                break;
        }
    };

    return (
        <React.Fragment>
            <tr key={ keyId } className={styles.biga83__table__rows_tr}>
                { kind !== 's' ? (kind !== 'i' ? <td className={styles.biga83__table__rows_td_options}>
                    { options }
                </td> : null) : null}
                { tds }
            </tr>
        </React.Fragment>
    );
};

export default React.memo(Rows);
