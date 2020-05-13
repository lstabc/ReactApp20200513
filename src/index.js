import React from 'react'
import { render } from 'react-dom'

import App from './App'
import store from './store'
console.log("这是store："+store)

render(
  <App store={store} />,
  document.querySelector('#root')
)