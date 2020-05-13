import { combineReducers } from 'redux'
//own
import transactionsReducer from 'features/addNewTransaction/transactionsSlice'

export default combineReducers({
    transactionsReducer,
})