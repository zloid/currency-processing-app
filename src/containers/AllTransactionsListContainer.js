import { connect } from 'react-redux'
import { deleteOneTransactionFromList } from '../actions'

import AllTransactionsListComponent from '../components/AllTransactionsListComponent'

const mapstateToProps = state => ({
  allTransactionList: state.listOfTransactionReducer.allTransactionList,
  euroToPlnExchangeRate: state.exchangeReducer.euroToPlnExchangeRate,
})

const mapDispatchToProps = dispatch => ({
  deleteOneTransactionFromList: id =>
    dispatch(deleteOneTransactionFromList(id)),
})

export default connect(mapstateToProps, mapDispatchToProps)(AllTransactionsListComponent)
