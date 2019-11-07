import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import App from './components/App'

import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(logger))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
