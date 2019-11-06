import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MainExchangeComponent = ({
  euroToPlnExchangeRate,
  addNameOfTransaction,
  transactionsNameList,
  allTransactionList,
  addNewTransactionToList
}) => {
  const [transactionName, setTransactionName] = useState('tr 1')

  const clickHandler = () => {
    if (!transactionName.trim()) {
    //   return addNameOfTransaction(
    //     new Date()
    //       .toISOString()
    //       .slice(0, 19)
    //       .replace(/T/, ', ')
    //   )
    }
    // addNameOfTransaction(transactionName)
    setTransactionName('')

    addNewTransactionToList(Math.floor(Date.now() * Math.random()), '222', 333, false)
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
        <legend>EUR {euroToPlnExchangeRate}</legend>
        <input type="text" placeholder="kwota..." />
      </fieldset>

      <button onClick={clickHandler}>Dodawanie transakcji walutowej</button>
      <hr />
      {transactionsNameList.map((name, key) => (
        <p key={key}>{name + ' - ' + key}</p>
      ))}
      <hr />

      {allTransactionList.map(obj => (
        <p key={obj.idOfNewTransaction}>{obj.idOfNewTransaction + ' - ' + obj.nameOfTransaction + ' - ' + obj.eurCount + ' -> ' + obj.eurCount * euroToPlnExchangeRate  + ' <- ' + obj.visible}</p>
      ))}
    </div>
  )
}

MainExchangeComponent.propTypes = {
  addNameOfTransaction: PropTypes.func.isRequired,
  euroToPlnExchangeRate: PropTypes.number.isRequired,
  transactionsNameList: PropTypes.array.isRequired,
  addNewTransactionToList: PropTypes.func.isRequired,
}

export default MainExchangeComponent
