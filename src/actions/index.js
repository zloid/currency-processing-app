export const SET_NEW_EUR_TO_PLN_EXCHANGE_RATE =
  'SET_NEW_EUR_TO_PLN_EXCHANGE_RATE'
export const ADD_NEW_TRANSACTION_TO_LIST = 'ADD_NEW_TRANSACTION_TO_LIST'
export const DELETE_ONE_TRANSACTION_FROM_LIST =
  'DELETE_ONE_TRANSACTION_FROM_LIST'
export const COUNT_ALL_EUR_TRANSACTION = 'COUNT_ALL_EUR_TRANSACTION'
export const GET_MAX_VALUE_FROM_TRANSACTIONS_LIST =
  'GET_MAX_VALUE_FROM_TRANSACTIONS_LIST'

export const setNewEuroToPlnExchangeRate = newRate => ({
  type: SET_NEW_EUR_TO_PLN_EXCHANGE_RATE,
  newRate,
})

export const addNewTransactionToList = (
  idOfNewTransaction,
  nameOfTransaction,
  eurCount,
  visible
) => ({
  type: ADD_NEW_TRANSACTION_TO_LIST,
  idOfNewTransaction,
  nameOfTransaction,
  eurCount,
  visible,
})

export const deleteOneTransactionFromList = id => ({
  type: DELETE_ONE_TRANSACTION_FROM_LIST,
  id,
})

export const countAllEurTransaction = () => ({
  type: COUNT_ALL_EUR_TRANSACTION,
})

export const getMaxValueFromTransactionList = () => ({
  type: GET_MAX_VALUE_FROM_TRANSACTIONS_LIST,
})
