import React from 'react'
import PropTypes from 'prop-types'

const OneTransaction = ({
  // idOfNewTransaction,
  nameOfTransaction,
  eurCount,
  plnCountOutput,
  // visible,
  funcOnClick,
}) => {
  // const clickHandler = () => {
  //   console.log(idOfNewTransaction)
  // }
  const miniStyle = { border: '1px solid', display: 'inline' }
  return (
    <div>
      {/* <div style={miniStyle}>
        <del>{idOfNewTransaction}</del>
      </div> */}
      <div style={miniStyle}>{nameOfTransaction}</div>
      <div style={miniStyle}>{eurCount}</div>
      <div style={miniStyle}>{plnCountOutput}</div>
      <div style={miniStyle}>{/* <del>{visible}</del> */}</div>
      <button onClick={funcOnClick}>DELETE</button>
    </div>
  )
}

const AllTransactionsListComponent = ({
  allTransactionList,
  deleteOneTransactionFromList,
  euroToPlnExchangeRate,
  countedAllEurTransaction,
  countAllEurTransaction,
}) => {
  // countAllEurTransaction()

  const setFloatingPoint = numberForHandler => {
    return +numberForHandler.toFixed(2)
  }

  // const handlerDeleteButton = (idOfNewTransaction) => {
  //   deleteOneTransactionFromList(idOfNewTransaction)
  //   countAllEurTransaction()
  // }

  const listOfAllTransaction = allTransactionList
    .filter(obj => obj.visible === true)
    .map(obj => (
      <OneTransaction
        key={obj.idOfNewTransaction}
        idOfNewTransaction={obj.idOfNewTransaction}
        nameOfTransaction={obj.nameOfTransaction}
        eurCount={obj.eurCount}
        plnCountOutput={setFloatingPoint(obj.eurCount * euroToPlnExchangeRate)}
        // visible={typeof obj.visible}
        // funcOnClick={handlerDeleteButton(obj.idOfNewTransaction)}
        // funcOnClick={() => deleteOneTransactionFromList(obj.idOfNewTransaction)}
        funcOnClick={() => {
          deleteOneTransactionFromList(obj.idOfNewTransaction)
          countAllEurTransaction()
        }}
      />
    ))

  return (
    <>
      <strong>AllTransactionsListComponent</strong>
      <br />
      name ------ EUR-----PL ---- del---{listOfAllTransaction}
      <br />
      <strong>count All EUR Transaction: {countedAllEurTransaction}</strong>
      <br />
      <strong>count All PLN Transaction: {setFloatingPoint(countedAllEurTransaction * euroToPlnExchangeRate)}</strong>
      <br />
    </>
  )
}

OneTransaction.propTypes = {
  nameOfTransaction: PropTypes.string.isRequired,
  eurCount: PropTypes.number.isRequired,
  plnCountOutput: PropTypes.number.isRequired,
  funcOnClick: PropTypes.func.isRequired,
}

AllTransactionsListComponent.propTypes = {
  allTransactionList: PropTypes.array.isRequired,
  deleteOneTransactionFromList: PropTypes.func.isRequired,
  euroToPlnExchangeRate: PropTypes.number.isRequired,
  countedAllEurTransaction: PropTypes.number.isRequired,
  countAllEurTransaction: PropTypes.func.isRequired,
}

export default AllTransactionsListComponent
