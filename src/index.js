import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
//own
import App from 'components/App'
import rootReducer from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)