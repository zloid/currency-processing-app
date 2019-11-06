import { combineReducers } from 'redux'
import exchangeReducer from './exchangeReducer'
import listOfTransactionReducer from './listOfTransactionReducer'

export default combineReducers({
  exchangeReducer,
  listOfTransactionReducer,
})
