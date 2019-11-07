import {
  ADD_NEW_TRANSACTION_TO_LIST,
  DELETE_ONE_TRANSACTION_FROM_LIST,
  COUNT_ALL_EUR_TRANSACTION,
  GET_MAX_VALUE_FROM_TRANSACTIONS_LIST,
} from '../actions'

const initialState = {
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
  countedAllEurTransaction: 877,
  nameOfMaxEurTransaction: 'Test transaction',
  maxValueOfEurTransaction: 777,
}

const listOfTransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TRANSACTION_TO_LIST:
      return {
        ...state,
        allTransactionList: [
          ...state.allTransactionList,
          {
            idOfNewTransaction: action.idOfNewTransaction,
            nameOfTransaction: action.nameOfTransaction,
            eurCount: setFloatingPoint(action.eurCount),
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
              return { ...obj, visible: !obj.visible }
            } else return obj
          }),
        ],
      }
    case COUNT_ALL_EUR_TRANSACTION:
      return {
        ...state,
        countedAllEurTransaction: getAllEurFromList(state.allTransactionList),
      }
    case GET_MAX_VALUE_FROM_TRANSACTIONS_LIST:
      return {
        ...state,
        nameOfMaxEurTransaction: getNameOfMaxTransaction(
          state.allTransactionList
        ),
        maxValueOfEurTransaction: getMaxEurTransactionValue(
          state.allTransactionList
        ),
      }
    default:
      return state
  }
}

function setFloatingPoint(numberForHandler) {
  return +numberForHandler.toFixed(2)
}

function getAllEurFromList(allTransactionListArray) {
  let filteredArray = allTransactionListArray.filter(
    obj => obj.visible === true
  )
  let countExistTransaction = filteredArray.length

  if (countExistTransaction > 0) {
    return setFloatingPoint(
      filteredArray
        .map(obj => obj.eurCount)
        .reduce((accum, currentVal) => accum + currentVal)
    )
  }

  return countExistTransaction
}

function getMaxEurTransactionValue(allTransactionListArray) {
  let filteredArray = allTransactionListArray.filter(
    obj => obj.visible === true
  )
  let countExistTransaction = filteredArray.length
  if (countExistTransaction > 0) {
    let arrayOfEurFromList = filteredArray.map(obj => obj.eurCount)
    let maxValue = arrayOfEurFromList.reduce((a, b) => Math.max(a, b))
    return maxValue
  }

  return countExistTransaction
}

function getNameOfMaxTransaction(allTransactionListArray) {
  let maxEurValue = getMaxEurTransactionValue(allTransactionListArray)


  let filteredArray = allTransactionListArray.filter(
    obj => obj.visible === true
  )
  let countExistTransaction = filteredArray.length
  if (countExistTransaction > 0) {
      let resultArr = filteredArray.filter(obj => obj.eurCount === maxEurValue)
      return resultArr[0].nameOfTransaction
  }
  return 'Create new transaction'

}

export default listOfTransactionReducer
