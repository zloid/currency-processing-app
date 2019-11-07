import React, { useState } from 'react'
// import AllTransactionsListComponent from './AllTransactionsListComponent'
import PropTypes from 'prop-types'

const MainExchangeComponent = ({
  euroToPlnExchangeRate,
  //   addNameOfTransaction,
  //   transactionsNameList,
  addNewTransactionToList,
  //   deleteOneTransactionFromList,
  countAllEurTransaction
}) => {
  const [transactionName, setTransactionName] = useState('')
  const [transactionAmount, setTransactionAmount] = useState(1)

  const clickHandler = () => {
    let middleValue
    if (!transactionName.trim()) {
      middleValue = new Date().toLocaleString()
    } else {
      middleValue = transactionName
    }
    setTransactionName('')

    addNewTransactionToList(
      Math.floor(Date.now() * Math.random()),
      middleValue,
      +transactionAmount,
      true
    )
    countAllEurTransaction()
  }

  const handlerForInputField = e => {
    let middleValue = e.target.value
      .replace(/[^0-9.]/, '')
      .replace(/^\./, '0.')
      .replace(/^0+(\d)/, '$1')
      .replace(/(\s*\.\s*)+/g, '$1')
      .replace(/(\d+\.\d+)\./g, '$1')
    setTransactionAmount(middleValue)
  }

  return (
    <div>
      <strong>MainExchangeComponent</strong>
      <fieldset>
        <legend>Nazwa transakcji</legend>
        <input
          type="text"
          placeholder="nazwa transakcji..."
          value={transactionName}
          onChange={e => setTransactionName(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <legend>EUR</legend>
        <input
          type="text"
          placeholder="kwota..."
          value={transactionAmount}
          //   onChange={e => setTransactionAmount(e.target.value)}
          onChange={handlerForInputField}
        />
      </fieldset>

      <button onClick={clickHandler}>Dodawanie transakcji walutowej</button>
      {/* <hr />
      {transactionsNameList.map((name, key) => (
        <p key={key}>{name + ' - ' + key}</p>
      ))} */}
      <hr />
    </div>
  )
}

MainExchangeComponent.propTypes = {
  euroToPlnExchangeRate: PropTypes.number.isRequired,
  //   addNameOfTransaction: PropTypes.func.isRequired,
  //   transactionsNameList: PropTypes.array.isRequired,
  addNewTransactionToList: PropTypes.func.isRequired,
  countAllEurTransaction: PropTypes.func.isRequired,
}

export default MainExchangeComponent
