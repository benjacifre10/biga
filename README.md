# biga

> primeralibreria

[![NPM](https://img.shields.io/npm/v/biga.svg)](https://www.npmjs.com/package/biga) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save biga
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from 'biga'
import 'biga/dist/index.css'

class Example extends Component {
  render() {
    return <MyComponent />
  }
}
```

## License

## Components

** Button
Options:
-kind: 'success', 'info', 'primary', 'warning', 'danger'
-type: 'button'
-title: 'plain text', 'icon fas fa-pencil',
-click: 'my function'

** DragAndDropList
Options:
-dataInitial: [{id: 3, nombre: 'aaa'}]
-dataFinal: null || [0, 2, 1] --only array of ids

** HeaderTitle
Options:
-text: 'aaa'

** InputText
Options:
-onChangeInputHandler: 'my function'
-title: 'aaa'
-icon: 'fas fa-pencil' -optional
-value: 'valor' - optional
-type: 'form' -optional

** Modal
Options:
-title: 'my modal'
-onClose: set true or false to show

** Notification
Options:
-type: 's', 'd', 'w', 'i', 'y', 'b'
-message: 'aaaa'
-title: 'aaaa'
-ubication: 'ul', 'u', 'ur', 'r', 'dr', 'd', 'dl', 'l', 'c' 

** SimpleTable
Options:
-data: [{...}]

** Table
Options:
-type: name of array data.
-data: [{...}] -> dont forget id field
-kind: 'ed' -> edit delete, 'fed' -> find edit delete

MIT © [Cifre Benja](https://github.com/Cifre Benja)
