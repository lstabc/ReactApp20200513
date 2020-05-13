import { createStore } from 'redux'

import rootReducer from './reducers'

export default createStore(rootReducer)
//console.log("这是rootReducer："+rootReducer)