import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allTransactionList: [
    {
      idOfNewTransaction: 0,
      nameOfTransaction: 'Test transaction',
      eurCount: 777,
      visible: true,
    },
    {
      idOfNewTransaction: 1,
      nameOfTransaction: '11/6/2019, 9:00:25 PM',
      eurCount: 100,
      visible: true,
    },
  ],
  euroToPlnExchangeRate: 4.25,
}

let nextTransactionId = 2
//all bellow is immutable because used Redux Toolkit and Immer
const transactionsSlice = createSlice({
  name: 'allTransactions',
  initialState,
  reducers: {
    getTransactionData: {
      reducer(state, action) {
        const {
          idOfNewTransaction,
          nameOfTransaction,
          eurCount,
          visible,
        } = action.payload
        state.allTransactionList.push({
          idOfNewTransaction,
          nameOfTransaction,
          eurCount,
          visible,
        })
      },
      prepare({ transactionText, transactionMoney }) {
        return {
          payload: {
            idOfNewTransaction: nextTransactionId++,
            nameOfTransaction: transactionText,
            eurCount: transactionMoney,
            visible: true,
          },
        }
      },
    },
    getNewEuroToPlnExchangeRate(state, action) {
      //Number()
      // state.euroToPlnExchangeRate = +action.payload
      state.euroToPlnExchangeRate = action.payload
    },
    deleteOneTransactionFromList(state, action) {
      state.allTransactionList.forEach(obj => {
        if (obj.idOfNewTransaction === action.payload) {
          return (obj.visible = false)
        }
      })
    },
  },
})

export const {
  getTransactionData,
  getNewEuroToPlnExchangeRate,
  deleteOneTransactionFromList,
} = transactionsSlice.actions
export default transactionsSlice.reducer
