import { connect } from 'react-redux'
import MainExchangeComponent from '../components/MainExchangeComponent'
import { addNewTransactionToList, countAllEurTransaction } from '../actions'

const mapStateToProps = state => ({
  euroToPlnExchangeRate: state.exchangeReducer.euroToPlnExchangeRate,
//   transactionsNameList: state.listOfTransactionReducer.transactionsNameList,
  //   allTransactionList: state.listOfTransactionReducer.allTransactionList,
})

const mapDispatchToProps = dispatch => ({
  //   addNameOfTransaction: transactionName =>
  //     dispatch(addNameOfTransaction(transactionName)),

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
  // deleteOneTransactionFromList: id => dispatch(deleteOneTransactionFromList(id))
  countAllEurTransaction: () => dispatch(countAllEurTransaction())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainExchangeComponent)
