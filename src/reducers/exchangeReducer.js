import { GET_START_COUNT_RESULT } from '../actions'

const setFloatingPoint = numberForHandler => {
  return +numberForHandler.toFixed(2)
}

const initialState = {
  startCountEur: 10,
  euroToPlnExchangeRate: 4.26,
  startCountResult: 0,
}

const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_START_COUNT_RESULT:
      return {
        ...state,
        startCountResult: setFloatingPoint(
          state.startCountEur * state.euroToPlnExchangeRate
        ),
      }

    default:
      return state
  }
}

export default exchangeReducer
