import { connect } from 'react-redux'
import MainExchangeComponent from '../components/MainExchangeComponent'
import {
  addNewTransactionToList,
  countAllEurTransaction,
  getMaxValueFromTransactionList,
} from '../actions'

const mapStateToProps = state => ({
  euroToPlnExchangeRate: state.exchangeReducer.euroToPlnExchangeRate,
})

const mapDispatchToProps = dispatch => ({
  addNewTransactionToList: (
    idOfNewTransaction,
    nameOfTransaction,
    eurCount,
    visible
  ) =>
    dispatch(
      addNewTransactionToList(
        idOfNewTransaction,
        nameOfTransaction,
        eurCount,
        visible
      )
    ),
  countAllEurTransaction: () => dispatch(countAllEurTransaction()),
  getMaxValueFromTransactionList: () =>
    dispatch(getMaxValueFromTransactionList()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainExchangeComponent)
