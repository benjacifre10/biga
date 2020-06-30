import React, { useState } from 'react'

import { 
  Button, 
  DragAndDropList,
  HeaderTitle,
  InputText,
  Modal,
  Notification,
  SimpleTable
} from 'biga';

import 'biga/dist/index.css'

const App = () => {

  const [show, setShow] = useState(false);

  const personWomen = [
    { id: 1, nombre: 'Indiana'},
    { id: 2, nombre: 'Yeye' },
    { id: 3, nombre: 'Benja' }
  ];
  const personMen = [3];

  let valueInput = '';

  const changeInput = (e) => {
    e.preventDefault();
    valueInput += e.target.value;
    console.log('val', valueInput);
  };

  const closeModal = () => {
    setShow(false);
  };

  const showNotification = () => {
    Notification({
        type: 'w',
        message: 'Mensaje de Advertencia',
        ubication: 'dl'
    });
  };
  

  return (
    <React.Fragment>
      <hr />
      <p>Button</p>
      <Button 
        kind={'danger'} 
        type={'button'} 
        title={"Holanda"} 
        click={() => console.log('click')}
      />
      <hr />
      <p>Drag And Drop List</p>
      <DragAndDropList dataInitial={ personWomen } dataFinal={ personMen ? personMen : null} />
      <hr />
      <p>Header Title</p>
      <HeaderTitle title={'Hola Titulo'} />
      <hr />
      <p>Input Text</p>
      <InputText onChangeInputHandler={(e) => changeInput(e)} title={'Name'} icon={'fas fa-search'}/>
      <InputText onChangeInputHandler={(e) => changeInput(e)} title={'Form'} type={'form'} />
      <hr />
      <p>Modal</p>
      <Button 
        kind={'info'} 
        type={'button'} 
        title={"Abrir Modal"} 
        click={() => setShow(true)}
      />
      { show ? <Modal
        title={'Mi modal'}
        onClose={closeModal}
      >
        <p>Hola contenido modal</p>
      </Modal> : null}
      <hr />
      <p>Notification</p>
      <Button 
        kind={'primary'} 
        type={'button'} 
        title={"Mostrar Notificacion"} 
        click={showNotification}
      />
      <hr />
      <p>Simple Table</p>
      <SimpleTable data={personWomen} />
    </React.Fragment>
  );
}

export default App
