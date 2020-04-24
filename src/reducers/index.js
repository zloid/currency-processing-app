import { combineReducers } from 'redux'
// import leftTextareaReducer from 'features/processDataFromTextareas/leftTextareaSlice'
import transactionsReducer from 'features/addNewTransaction/transactionsSlice'

export default combineReducers({
    // leftTextareaReducer,
    transactionsReducer,
})



