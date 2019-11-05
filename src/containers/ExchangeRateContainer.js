import { connect } from 'react-redux'
import ExchangeRateComponent from '../components/ExchangeRateComponent'
import { getStartCountResult } from '../actions'

const mapStateToProps = state => ({
  startCount: state.exchangeReducer.startCountEur,
  startCountResult: state.exchangeReducer.startCountResult,
})

const mapDispatchToProps = dispatch => ({
  calculateStartCount: () => dispatch(getStartCountResult()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExchangeRateComponent)
