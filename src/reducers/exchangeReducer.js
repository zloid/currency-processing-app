import { SET_NEW_EUR_TO_PLN_EXCHANGE_RATE } from '../actions'



const initialState = {
  startCountEur: 1,
  euroToPlnExchangeRate: 4.25,
}

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_EUR_TO_PLN_EXCHANGE_RATE:
      return {
        ...state,
        euroToPlnExchangeRate: action.newRate,
      }

    default:
      return state
  }
}

export default exchangeReducer
