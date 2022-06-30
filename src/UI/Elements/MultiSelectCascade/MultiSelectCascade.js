import React, { useState, useEffect } from 'react';

import ComboBox from '../ComboBox/ComboBox';

const MultiSelectCascade = ({
    data,
    fields,
    changed,
    valuesMulti
}) => {

    const [selects, setSelects] = useState(null);
    const [selectsData, setSelectsData] = useState({});
    const [selectsValues, setSelectsValues] = useState({});

    const changeValue = (type, val) => {
        changed(type.charAt(0).toLowerCase() + type.slice(1), val);
        fields.map((f, i) => {
            if (f[0] === type.toLowerCase() && val !== selectsValues.values[type.toLowerCase()]) {
                setSelectsValues({
                    ...selectsValues,
                    values: {
                        ...selectsValues.values,
                        [type.toLowerCase()]: val
                    }
                });
                if (fields.length > (i + 1)) {
                    setSelects(null);
                    const nextData = Array.from(new Set(data.filter((item) => {
                        if (item[fields[i][0]] === val) return true;
                        else return false
                    }).map(item => item[fields[i + 1][0]]))).map(o => ({[fields[i + 1][0]]: o}));
                    setSelectsData({
                        ...selectsData,
                        data: {
                            ...selectsData.data,
                            [fields[i + 1][0]]: nextData
                        }
                    });
                } else {
                    setSelects(null);
                    setSelectsData({
                        ...selectsData
                    });
                }
            }
        });
    };

    useEffect(() => {
        const data = {};
        const values = {};

        fields.map((f, i) => {
            if (valuesMulti) {
                values[f[0]] = valuesMulti[f[0]];
                data[f[0]] = null
            }
            else {
                values[f[0]] = '';
                data[f[0]] = null
            }
        });
        setSelectsData({
            ...selectsData,
            data
        });
        setSelectsValues({
            ...selectsValues,
            values
        });
    }, []);

    useEffect(() => {
        if (!(
            selectsData && 
            Object.keys(selectsData).length === 0 && 
            selectsData.constructor === Object)
            ) {
                if (!selectsData.data[fields[0][0]]) {
                    const newFirstData = Array.from(new Set(data.map(item => item[fields[0][0]]))).map(o => ({[fields[0][0]]: o}));
                    setSelectsData({
                        ...selectsData,
                        data: {
                            ...selectsData.data,
                            [fields[0][0]]: newFirstData
                        }
                    });
                } 
        }
    }, [selectsData]);

    useEffect(() => {
        if (selectsData.data && selectsValues.values) {
            if (selectsData.data[fields[0][0]]) {
                setSelects(
                    fields.map((f, i) => {
                        return (
                            <ComboBox
                                key={f[0]}
                                value={selectsValues.values[f[0]]} 
                                changed={changeValue}
                                options={{
                                    title: f[0].charAt(0).toUpperCase() + f[0].slice(1),
                                    data: selectsData.data[f[0]] ? selectsData.data[f[0]] : [],
                                    key: f[1][0],
                                    text: [f[1][0]],
                                    background: "white",
                                    disabled: f[0] === fields[0][0] ? false : selectsData.data[f[0]] ? false : true
                                }}
                            />
                        );
                    })        
                );
            }
        }
    }, [selectsData]);
    
    return (
        <React.Fragment>
            { selects }
        </React.Fragment>
    );
};

export default MultiSelectCascade;
