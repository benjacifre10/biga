import React, { useState, useEffect } from 'react';

import Button from '../../Button/Button';
import ComboBox from '../../ComboBox/ComboBox';
import MultiSelectCascade from '../../MultiSelectCascade/MultiSelectCascade';
import styles from '../../../../styles.module.css';

const FormFields = ({
    data, 
    extraData, 
    formInputs, 
    hidden, 
    required,
    disabled, 
    getResult }) => {
    
    const [result, setResult] = useState({});
    const [inputs, setInputs] = useState([]);

    useEffect(() => {
        setResult(formInputs.reduce((obj, item) => (obj[Object.keys(item)] = '', obj) ,{}));
        if (data) setResult({...data});
    }, []);
    
    useEffect(() => {
        if (Object.keys(result).length > 0 && result.constructor === Object) {
            setInputs(formInputs.map((f, i) => {
                return chooseInput(Object.keys(f), Object.values(f), i);
            }));
        }
    }, [result]);

    const changeValues = (e) => {
        e.preventDefault();
        const newResult = {...result};
        newResult[e.target.name] = e.target.value;
        setResult(newResult);
    };

    const changeValueCombo = (type, val) => {
        const newResult = {...result};
        newResult[type.charAt(0).toLowerCase() + type.slice(1)] = val;
        setResult(newResult);
    };

    const calculateDate = (val, type) => {
        if (val) {
            let dateConvert = new Date(val);
            switch (type) {
                case 'date':
                    dateConvert = dateConvert.toISOString().slice(0,10);
                    return dateConvert;
                case 'datetime': 
                    dateConvert = dateConvert.toISOString().slice(0, 16);
                    return dateConvert;
                default:
                    return null;
            }
        } else return null;
    };

    const chooseInput = (value, type, key) => {
        let title = value[0].charAt(0).toUpperCase() + value[0].slice(1);
        let keys = Object.keys(result);
        let idValue = 0;
        keys.forEach((k, i) => {
            if (k === value[0])  {
                idValue = i; 
            }
        });
        let requiredOpt = {};
        if (required.includes(value[0])) requiredOpt["required"] = "required";
        if (hidden.includes(value[0])) {    
            return <input type="hidden" key={key} name={value[0]} value={Object.values(result)[idValue] || 0} onChange={changeValues}/>;
        } else {
            switch (type[0]) {
                case 'number':
                    return <input type="number" name={value[0]} key={key} placeholder={title} {...requiredOpt} value={Object.values(result)[idValue] || 0} onChange={changeValues} disabled={disabled.includes(value[0]) ? true : false}/>;
                case 'string':
                    return <input type="text" name={value[0]} key={key} placeholder={title} {...requiredOpt} value={Object.values(result)[idValue] || ""} onChange={changeValues} disabled={disabled.includes(value[0]) ? true : false}/>;
                case 'date':
                    return <input type="date" name={value[0]} key={key} placeholder={title} {...requiredOpt} value={calculateDate(Object.values(result)[idValue], 'date') || ""} onChange={changeValues} disabled={disabled.includes(value[0]) ? true : false}/>;
                case 'datetime':
                    return <input type="datetime-local" name={value[0]} key={key} placeholder={title} {...requiredOpt} value={calculateDate(Object.values(result)[idValue], 'datetime') || ""} onChange={changeValues} disabled={disabled.includes(value[0]) ? true : false}/>;
                case 'email':
                    return <input type="email" name={value[0]} key={key} placeholder={title} {...requiredOpt} value={Object.values(result)[idValue] || ""} onChange={changeValues} disabled={disabled.includes(value[0]) ? true : false}/>;
                case 'textarea':
                    return <textarea name={value[0]} key={key} placeholder={title} {...requiredOpt} value={Object.values(result)[idValue] || ""} disabled={disabled.includes(value[0]) ? true : false}></textarea>;
                default:
                    if (Array.isArray(type[0])) {
                        switch (type[0][0]) {
                            case 'select':
                                return <ComboBox
                                    key={value[0]}
                                    value={Object.values(result)[idValue] || ""}
                                    changed = {changeValueCombo} 
                                    options={{
                                        title: value[0].charAt(0).toUpperCase() + value[0].slice(1),
                                        data: extraData.find(e => e[value[0]])[value[0]] || [],
                                        key: type[0][1],
                                        text: type[0][2],
                                        background: "white",
                                        disabled: disabled.includes(value[0]) ? true : false
                                }}/>;
                            case 'multiselectcascade':
                                return <MultiSelectCascade
                                    key={value[0]}
                                    data={extraData.find(e => e[value[0]])[value[0]] || []}
                                    fields={type[0][1]}
                                    changed={changeValueCombo}
                                    valuesMulti={data || null}
                                />;
                            default:
                                return null;
                        }
                    }
            }   
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        Object.keys(result).forEach((r, i) => {
            if (r === hidden[0]) {
                if (Object.values(result)[i]) getResult('u', result);
                else getResult('a', result);
            }
        });
    }

    return (
        <div className={styles.biga83__table__formfields}>
            <form onSubmit={submitHandler}>
                { inputs }
                <Button 
                    kind={'success'} 
                    type={'submit'} 
                    title={"icon fas fa-save"} 
                    style={{width: "100%"}}
                />
            </form>
        </div>
    );
};

export default FormFields;
