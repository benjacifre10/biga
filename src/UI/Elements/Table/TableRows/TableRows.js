import React from 'react';

import Rows from './Rows/Rows';

const TableRows = ({ 
    type, 
    data, 
    extraData, 
    kind, 
    hidden, 
    updateItem, 
    deleteItem,
    formInputs }) => {

    return (
        <tbody>
            { data.map((d, i) => {
                return <Rows 
                    type={ type } 
                    row={ d } 
                    extraData={ extraData } 
                    key={ i } 
                    kind={ kind } 
                    hidden={ hidden } 
                    updateItem={ updateItem } 
                    deleteItem={ deleteItem }
                    formInputs={ formInputs }
                />;
            })}
        </tbody>
    );
};

export default TableRows;
