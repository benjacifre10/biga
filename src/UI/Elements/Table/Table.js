import React, { useState, useEffect, useCallback } from 'react';

import InputText from '../InputText/InputText';
import Button from '../Button/Button';
import TableHeader from './TableHeader/TableHeader';
import TableRows from './TableRows/TableRows';
import Pagination from './Pagination/Pagination';
import ModalRow from './ModalRow/ModalRow';
import FormFields from './FormFields/FormFields';

import styles from '../../../styles.module.css';

const Table = ({ 
    type, 
    data, 
    extraData, 
    kind,  
    actionItem,
    formInputs, 
    hidden = null, 
    required = null,
    disabled = null,
    pagination = null, 
    rowCount = null}) => {
        
    const [filter, setFilter] = useState('');
    const [actualPage, setActualPage] = useState(1);
    const [dataFinal, setDataFinal] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [show, setShow] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [fields, setFields] = useState(null);

    const loadData = useCallback((filter, actualPage, data) => {
        setTotalRows(data
            .filter((c, i) => {
                let newC = {};
                for (const prop in c) {
                    if (!hidden.includes(prop)) Object.defineProperty(newC, prop, { enumerable: true, value: c[prop] });
                }
                return Object.values(newC)
                .join(' ').toUpperCase().indexOf(filter.toUpperCase()) > -1
            }).length
        );
            
        return data
            .filter((c, i) => { 
                let newC = {};
                for (const prop in c) {        
                    if (!hidden.includes(prop)) Object.defineProperty(newC, prop, { enumerable: true, value: c[prop] });
                }
                return Object.values(newC).join(' ').toUpperCase().indexOf(filter.toUpperCase()) > -1})
            .filter((c, i) => (i >= ((actualPage * rowCount) - rowCount) && i <= ((actualPage * rowCount) - 1)));
    }, []);

    useEffect(() => {
        setDataFinal(loadData(filter, actualPage, data));
    }, [filter, actualPage, data, loadData]);
    
    const filterInputHandler = (e) => {
        setFilter(e.target.value);
        setActualPage(1);
        setDataFinal(loadData(filter, actualPage, data));
    };
    
    const prepareFields = (row) => {
        setFields(<FormFields 
            data={ row }
            extraData={ extraData } 
            formInputs={ formInputs } 
            hidden={ hidden } 
            required={ required }
            disabled={ disabled } 
            getResult={ getResult }
        />);
    };

    const addHandler = () => {
        prepareFields(null);
        setShow(true);
        setTitleModal(`Agregar ${type}`);
    }

    const updateHandler = (type, row) => {
        prepareFields(row);
        setShow(true);
        setTitleModal(`Editar ${type}`);
    }

    const closeModal = () => {
        setShow(false);
    };
    
    const changePageHandler = (e) => {
        switch (e.target.value) {
            case -1:
                let prevPage = actualPage - 1;
                setActualPage(prevPage);
                break;
            case 0:
                let nextPage = actualPage + 1;
                setActualPage(nextPage);
                break;
            default:
                setActualPage(e.target.value);
                break;
        }
    };

    const getResult = (type, data) => {
        actionItem(type, data);
        closeModal();   
    };
    
    let keys = Object.keys(data[0]);
    
    return (
        <React.Fragment>
            { show ? <ModalRow
                title={ titleModal }
                onClose={ closeModal }
            >
                { fields ? fields : <p>No hay nada para mostrar</p> }
            </ModalRow> : null }
            <InputText 
                onChangeInputHandler={ filterInputHandler } 
                title={ 'Buscar' } 
                icon={ 'fas fa-search' }
            />
            <div className={styles.biga83__table__container}>
                <table className={styles.biga83__table__main}>
                    <thead>
                        <TableHeader 
                            headerNames={ keys }
                            hidden={ hidden }
                            kind={ kind }
                        />
                    </thead>
                    <TableRows 
                        type={ type } 
                        data={ dataFinal } 
                        extraData={ extraData } 
                        kind={ kind } 
                        hidden={ hidden } 
                        updateItem={ updateHandler } 
                        deleteItem={ actionItem } 
                        formInputs={ formInputs }
                    />
                </table>
            </div>
            <Pagination 
                rowsCount={ totalRows } 
                rowCount={ rowCount } 
                page={ actualPage } 
                changePageHandler={ changePageHandler }
            />
            { kind.includes('i') ? <div className={styles.biga83__table__div_button}>
                <Button 
                    kind={ 'info' }
                    type={ 'button' } 
                    title={ "icon fas fa-plus-circle" }
                    click={ addHandler }
                />
            </div> : null}
        </React.Fragment>
    );
};

export default Table;
