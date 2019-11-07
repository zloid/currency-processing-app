import { connect } from 'react-redux'
import { deleteOneTransactionFromList, countAllEurTransaction } from '../actions'

import AllTransactionsListComponent from '../components/AllTransactionsListComponent'

const mapStateToProps = state => ({
  allTransactionList: state.listOfTransactionReducer.allTransactionList,
  euroToPlnExchangeRate: state.exchangeReducer.euroToPlnExchangeRate,
  countedAllEurTransaction: state.listOfTransactionReducer.countedAllEurTransaction,
})

const mapDispatchToProps = dispatch => ({
  deleteOneTransactionFromList: id =>
    dispatch(deleteOneTransactionFromList(id)),
    countAllEurTransaction: () => dispatch(countAllEurTransaction())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllTransactionsListComponent)
