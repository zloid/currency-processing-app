import { connect } from 'react-redux'
import { deleteOneTransactionFromList, countAllEurTransaction, getMaxValueFromTransactionList } from '../actions'

import AllTransactionsListComponent from '../components/AllTransactionsListComponent'

const mapStateToProps = state => ({
  allTransactionList: state.listOfTransactionReducer.allTransactionList,
  euroToPlnExchangeRate: state.exchangeReducer.euroToPlnExchangeRate,
  countedAllEurTransaction: state.listOfTransactionReducer.countedAllEurTransaction,
  nameOfMaxEurTransaction: state.listOfTransactionReducer.nameOfMaxEurTransaction,
  maxValueOfEurTransaction: state.listOfTransactionReducer.maxValueOfEurTransaction,

})

const mapDispatchToProps = dispatch => ({
  deleteOneTransactionFromList: id =>
    dispatch(deleteOneTransactionFromList(id)),
    countAllEurTransaction: () => dispatch(countAllEurTransaction()),
    getMaxValueFromTransactionList: () => dispatch(getMaxValueFromTransactionList())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTransactionsListComponent)
