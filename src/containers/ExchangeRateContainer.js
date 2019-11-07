import { connect } from 'react-redux'
import ExchangeRateComponent from '../components/ExchangeRateComponent'
import { setNewEuroToPlnExchangeRate } from '../actions'

const mapStateToProps = state => ({
  startCount: state.exchangeReducer.startCountEur,
  euroToPlnExchangeRate: state.exchangeReducer.euroToPlnExchangeRate,
})

const mapDispatchToProps = dispatch => ({
  setNewEuroToPlnExchangeRate: newRate =>
    dispatch(setNewEuroToPlnExchangeRate(newRate)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRateComponent)
