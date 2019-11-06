import {
  ADD_NAME_OF_TRANSACTION_TO_ARRAY,
  ADD_NEW_TRANSACTION_TO_LIST,
  DELETE_ONE_TRANSACTION_FROM_LIST
} from '../actions'

const initialState = {
  transactionsNameList: [],
  allTransactionList: [
    {
      idOfNewTransaction: 1234567890,
      nameOfTransaction: 'Test transaction',
      eurCount: 777,
      visible: true,
    },
    {
      idOfNewTransaction: 12312312312312,
      nameOfTransaction: '11/6/2019, 9:00:25 PM',
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
      case DELETE_ONE_TRANSACTION_FROM_LIST:
          return {
              ...state,
              allTransactionList: [
                ...state.allTransactionList.map(obj => {
                    if (obj.idOfNewTransaction === action.id) {
                        return {...obj, visible: !obj.visible}
                    } else return obj
                })
              ]
          }
    default:
      return state
  }
}

export default listOfTransactionReducer
