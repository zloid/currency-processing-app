import { connect } from 'react-redux'
import MainExchangeComponent from '../components/MainExchangeComponent'

const mapStateToProps = state => ({
    startCount: state.exchangeReducer.startCountEur,
    startCountResult: state.exchangeReducer.startCountResult,
    euroToPlnExchangeRate: state.exchangeReducer.euroToPlnExchangeRate,
  })

export default connect(mapStateToProps)(MainExchangeComponent)
