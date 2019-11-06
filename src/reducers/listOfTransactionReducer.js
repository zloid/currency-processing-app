import {
  ADD_NAME_OF_TRANSACTION_TO_ARRAY,
  ADD_NEW_TRANSACTION_TO_LIST,
} from '../actions'

const initialState = {
  transactionsNameList: [],
  allTransactionList: [
    {
      idOfNewTransaction: 8769756,
      nameOfTransaction: 'some name',
      eurCount: 77,
      visible: true,
    },
    {
      idOfNewTransaction: 123123,
      nameOfTransaction: 'new transac. name',
      eurCount: 100,
      visible: true,
    },
  ],
}

const listOfTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NAME_OF_TRANSACTION_TO_ARRAY:
      return {
        ...state,
        transactionsNameList: [
          ...state.transactionsNameList,
          action.transactionName,
        ],
      }
    case ADD_NEW_TRANSACTION_TO_LIST:
      return {
        ...state,
        allTransactionList: [
          ...state.allTransactionList,
          {
            idOfNewTransaction: action.idOfNewTransaction,
            nameOfTransaction: action.nameOfTransaction,
            eurCount: action.eurCount,
            visible: action.visible,
          },
        ],
      }
    default:
      return state
  }
}

export default listOfTransactionReducer
