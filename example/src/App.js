import React, { useState } from 'react'

import { 
  Button, 
  DragAndDropList,
  HeaderTitle,
  InputText,
  Modal,
  MultiSelectCascade,
  Notification,
  SimpleTable,
  Table,
  ProGrid,
  ComboBox,
  Spinner,
  TabPanel
} from 'biga';

import 'biga/dist/index.css'

const App = () => {

  const [show, setShow] = useState(false);

  const modality = [
    {cod_modalidad: "BAS", descripcion: "Basica", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAA"},
    {cod_modalidad: "CPP", descripcion: "CPP", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAB"},
    {cod_modalidad: "MPP", descripcion: "MPP", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAC"},
    {cod_modalidad: "SOP", descripcion: "Servicio Operadora", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAD"},
    {cod_modalidad: "ESP", descripcion: "Numeros Especiales", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAE"},
    {cod_modalidad: "SAD", descripcion: "Emergencia Paraguay", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAF"},
    {cod_modalidad: "MOV", descripcion: "Movil", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAG"},
    {cod_modalidad: "FIJ", descripcion: "Fija", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAH"},
    {cod_modalidad: "RUR", descripcion: "Rural", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAI"},
    {cod_modalidad: "PQR", descripcion: "PQR", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAJ"},
    {cod_modalidad: "CNF", descripcion: "Convergente Fija", tipo_uso: null, rowid_: "AAAQtDAAEAAAIFjAAK"}
  ];

  const personWomen = [
    { id: 1, nombre: 'Bichi', comida: 1, tipoDni: 1,cod_modalidad: 'BAS', fechaNacimiento: "2021-01-03T00:00:00.000Z", pais: 'Argentina', provincia: 'Buenos Aires', departamento: 'Capital', localidad: 'Avellaneda' },
    { id: 2, nombre: 'Yeye', comida: 3, tipoDni: 3,cod_modalidad: 2, fechaNacimiento: (new Date()).toString(), pais: 'Argentina', provincia: 'Cordoba', departamento: 'Capital', localidad: 'Cordoba'  },
    { id: 3, nombre: 'Benja', comida: 4, tipoDni: 2,cod_modalidad: 2, fechaNacimiento: (new Date()).toString(), pais: 'Argentina', provincia: 'Cordoba', departamento: 'Rio Cuarto', localidad: 'Rio Cuarto'},
    { id: 4, nombre: 'Juan', comida: 2, tipoDni: 1,cod_modalidad: 2, fechaNacimiento: (new Date()).toString(), pais: 'Argentina', provincia: 'Santa Fe', departamento: 'Rosario', localidad: 'San Justo'},
    { id: 5, nombre: 'Olivia', comida: 1, tipoDni: 3,cod_modalidad: 2, fechaNacimiento: (new Date()).toString(), pais: 'Paraguay', provincia: 'Asuncion', departamento: 'Tres Arroyos', localidad: 'Tres Arroyos'},
    { id: 6, nombre: 'Indiana', comida: 2, tipoDni: 1,cod_modalidad: 2, fechaNacimiento: (new Date()).toString(), pais: 'Uruguay', provincia: 'Artigas', departamento: 'Artigas', localidad: 'Calnu'},
    { id: 7, nombre: 'Maria', comida: 1, tipoDni: 4,cod_modalidad: 2, fechaNacimiento: (new Date()).toString(), pais: 'Uruguay', provincia: 'Artigas', departamento: 'Artigas', localidad: 'Coronado' },
    { id: 8, nombre: 'Barbara', comida: 1, tipoDni: 2,cod_modalidad: 2, fechaNacimiento: (new Date()).toString(), pais: 'Uruguay', provincia: 'Canelones', departamento: 'Canelones', localidad: 'Argentino'},
    { id: 9, nombre: 'Micaela', comida: 1, tipoDni: 4,cod_modalidad: 2, fechaNacimiento: (new Date()).toString(), pais: 'Uruguay', provincia: 'Canelones', departamento: 'Canelones', localidad: 'Milan'}
  ];
  
  const personMen = [3];

  const tipoDni = [
    { id: 1, nombre: 'DNI' },
    { id: 2, nombre: 'LE' },
    { id: 3, nombre: 'LC' },
    { id: 4, nombre: 'Pasaporte' }
  ];

  const comida = [
    { key: 1, nombre: 'milanesa', tipo: 'frio' },
    { key: 2, nombre: 'papafritas', tipo: 'caliente'},
    { key: 3, nombre: 'pure', tipo: 'caliente' }
  ];

  /* MULTISELECTCASCADE*/
  // esto recibiria supuestamente emulando que este archivo corresponde al formfields
  const geografia = [
    { pais: 'Argentina', provincia: 'Buenos Aires', departamento: 'Tres Arroyos', localidad: 'Tres Arroyos' },
    { pais: 'Argentina', provincia: 'Buenos Aires', departamento: 'Capital', localidad: 'Avellaneda' },
    { pais: 'Argentina', provincia: 'Buenos Aires', departamento: 'Capital', localidad: 'Caballito' },
    { pais: 'Argentina', provincia: 'Cordoba', departamento: 'Capital', localidad: 'Cordoba' },
    { pais: 'Argentina', provincia: 'Cordoba', departamento: 'Rio Cuarto', localidad: 'Rio Cuarto' },
    { pais: 'Argentina', provincia: 'Cordoba', departamento: 'Rio Cuarto', localidad: 'Las Acequias' },
    { pais: 'Argentina', provincia: 'Cordoba', departamento: 'Rio Tercero', localidad: 'Embalse' },
    { pais: 'Argentina', provincia: 'Cordoba', departamento: 'Rio Tercero', localidad: 'Rio Tercero' },
    { pais: 'Argentina', provincia: 'Santa Fe', departamento: 'Rosario', localidad: 'Rosario' },
    { pais: 'Argentina', provincia: 'Santa Fe', departamento: 'Rosario', localidad: 'San Justo' },
    { pais: 'Argentina', provincia: 'Santa Fe', departamento: 'Santa Fe', localidad: 'Santo Tome' },
    { pais: 'Argentina', provincia: 'Santa Fe', departamento: 'Santa Fe', localidad: 'Santa Fe' },
    { pais: 'Paraguay', provincia: 'Asuncion', departamento: 'Tres Arroyos', localidad: 'Tres Arroyos' },
    { pais: 'Paraguay', provincia: 'Buenos Aires', departamento: 'Tres Arroyos', localidad: 'Tres Arroyos' },
    { pais: 'Paraguay', provincia: 'Buenos Aires', departamento: 'Tres Arroyos', localidad: 'Tres Arroyos' },
    { pais: 'Uruguay', provincia: 'Artigas', departamento: 'Artigas', localidad: 'Calnu' },
    { pais: 'Uruguay', provincia: 'Artigas', departamento: 'Artigas', localidad: 'Coronado' },
    { pais: 'Uruguay', provincia: 'Canelones', departamento: 'Canelones', localidad: 'Argentino' }
  ];

  // los fields que recibiria dinamicamente que los interpreta automaticamente como select
  const multiSelectFields = [
    ["pais", ["pais"]], 
    ["provincia", ["provincia"]], 
    ["departamento", ["departamento"]], 
    ["localidad", ["localidad"]]
  ];

  // multi select cascade (NO SE SI ESTO LO TENGO QUE IMPLEMENTAR EN ESTE LUGAR)
  // const [countryData, setCountryData] = useState(null);
  // const [countryValue, setCountryValue] = useState(null);
  // const [provinceData, setProvinceData] = useState(null);
  // const [provinceValue, setProvinceValue] = useState(null);
  // const [departamentData, setDepartamentData] = useState(null);
  // const [departamentValue, setDepartamentValue] = useState(null);
  // const [localityData, setLocalityData] = useState(null);
  // const [localityValue, setLocalityValue] = useState(null);
  /* MULTISELECTCASCADE*/

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
        ubication: 'ul'
    });
  };
  // table
  const actionItem = (type, row) => {
    switch (type) {
      case 'a':
        console.log('agrego');
        break;
      case 'u':
        console.log('actualizo');
        break;
      case 'd':
        console.log('borro');
        break;
      default:
        break;
    }
    console.log('action', type, row);
  }
  //combobox
  const changeValue = (type, val) => {
    console.log(type, val);
  };

  return (
    <React.Fragment>
      <hr />
      <p>Multi Select Cascade</p>
      <MultiSelectCascade 
        data={geografia}
        fields={multiSelectFields}
      />
      <hr />
      <p>Tab Panel</p>
      {/* <TabPanel 
        orientation = { 'v' }
        header = {[
          {title: 'Code', icon: 'fa fa-code'},
          {title: 'About', icon: 'far fa-edit'},
          {title: 'Services', icon: 'fas fa-chart-bar'},
          {title: 'Contact', icon: 'far fa-envelope'}
        ]}
        body = {[
          {title: 'This is code section', icon: 'fa fa-code', content: <Table 
          type={'Personas'} 
          data={personWomen} 
          extraData={[{comida: comida}, {tipoDni: tipoDni}, {cod_modalidad: modality}]}
          kind={'de'} 
          actionItem={actionItem}
          formInputs={[
            {id: "number"}, 
            {tipoDni: ["select", "id", ["nombre"]]},
            {nombre: "string"}, 
            {comida: ["select", "key", ["nombre"]]},
            {cod_modalidad: ["select", "cod_modalidad", ["descripcion"]]},
            {fechaNacimiento: "datetime"}
          ]}
          hidden={['id']}
          required={['nombre']}
          disabled={['nombre', 'comida']}
          pagination={{
            pageSize: 6,
            pageNumber: 1,
            total: 10,
            sortAscending: true,
            sortBy: ''
          }}
          rowCount= {6}
        />},
          {title: 'This is about section', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error neque saepe commodi blanditiis fugiat nisi aliquam ratione porro quibusdam in, eveniet accusantium cumque. Dolore officia reprehenderit perferendis quod libero omnis.'},
          {content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error neque saepe commodi blanditiis fugiat nisi aliquam ratione porro quibusdam in, eveniet accusantium cumque. Dolore officia reprehenderit perferendis quod libero omnis.'},
          {title: 'This is contact section', content: <ProGrid config={{
            title: 'Personas'
          }} />}
        ]}
      /> */}
      <hr />
      <p> Pro Grid</p>
      <ProGrid config={{
        title: 'Personas'
      }} />
      <hr />
      <p>Table</p>
      <Table 
        type={'Personas'} 
        data={personWomen} 
        extraData={[
          {comida: comida}, 
          {tipoDni: tipoDni}, 
          {cod_modalidad: modality}, 
          {geographic: geografia}
        ]}
        kind={'ie'} 
        actionItem={actionItem}
        formInputs={[
          {id: "number"}, 
          {tipoDni: ["select", "id", ["nombre"]]},
          {nombre: "string"}, 
          {comida: ["select", "key", ["nombre"]]},
          {cod_modalidad: ["select", "cod_modalidad", ["descripcion"]]},
          {fechaNacimiento: "datetime"},
          {geographic: ["multiselectcascade", 
           [
            ["pais", ["pais"]], 
            ["provincia", ["provincia"]], 
            ["departamento", ["departamento"]], 
            ["localidad", ["localidad"]]
          ]]}
        ]}
        hidden={['id']}
        required={['nombre']}
        disabled={['nombre', 'comida']}
        pagination={{
          pageSize: 6,
          pageNumber: 1,
          total: 10,
          sortAscending: true,
          sortBy: ''
        }}
        rowCount= {6}
      />
      <hr />
      <p>Button</p>
      <Button 
        kind={'danger'} 
        type={'button'} 
        title={"Holanda"} 
        click={() => console.log('click')}
      />
      <hr />
      <p>Header Title</p>
      <HeaderTitle title={'Hola Titulo'} color={'#bafa01'}/>
      <hr />
      <p>Drag And Drop List</p>
      <DragAndDropList dataInitial={ personWomen } dataFinal={ personMen ? personMen : null} />
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
      <hr />
      <p>Combo Box</p>
      <ComboBox 
        changed={changeValue}
        options={{
          title: "Comida",
          data: comida,
          key: "key",
          text: ["nombre", "key"],
          background: "#2f3640",
          disabled: false
        }}
      />
      <hr />
      <Spinner />
      <hr />
    </React.Fragment>
  );
}

export default App
