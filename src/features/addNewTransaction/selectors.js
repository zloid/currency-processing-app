/** @module selectors */
import React from 'react'
//own
import OneTransactionComponent from 'features/addNewTransaction/OneTransactionComponent'
 
/**
 * Selector for displaying active transactions, need JSX.Element OneTransactionComponent for work 
 * @function
 * @name selectListOfAllTransaction
 * @param {{}} state whole redux state
 * @param {array.<object>} state.transactionsReducer.allTransactionList array of objects
 * @param {number} state.transactionsReducer.euroToPlnExchangeRate float-number of actual rate
 * @returns {JSX.Element} React elements - all enable transactions
 */
export const selectListOfAllTransaction = (state) => {
  /**
   * State object destructuring
   * @constant {[{visible: boolean, idOfNewTransaction: number, nameOfTransaction: string, eurCount: number}]} allTransactionList
   */   
  const {
    allTransactionList,
    euroToPlnExchangeRate,
  } = state.transactionsReducer

  return allTransactionList
    .filter(({ visible }) => visible === true)
    .map(({ idOfNewTransaction, nameOfTransaction, eurCount }) => (
      <OneTransactionComponent
        key={idOfNewTransaction}
        idOfNewTransaction={idOfNewTransaction}
        nameOfTransaction={nameOfTransaction}
        eurCount={eurCount}
        plnCountOutput={Number((eurCount * euroToPlnExchangeRate).toFixed(2))}
      />
    ))
}

export const selectSumOfAllTransactions = (state) => {
  const {
    allTransactionList,
    euroToPlnExchangeRate,
  } = state.transactionsReducer
  const filteredArray = allTransactionList.filter(
    ({ visible }) => visible === true
  )
  const reducer = (accum, { eurCount }) => accum + eurCount
  const sumEur = filteredArray.reduce(reducer, 0)
  const sumOfAllTransactionsPln = Number(
    (sumEur * euroToPlnExchangeRate).toFixed(2)
  )
  return [sumEur, sumOfAllTransactionsPln]
}

export const selectMaxValTransaction = (state) => {
  const {
    allTransactionList,
    euroToPlnExchangeRate,
  } = state.transactionsReducer
  const filteredFromAllEurVal = allTransactionList.filter(
    ({ visible }) => visible === true
  )
  if (filteredFromAllEurVal.length > 0) {
    const reducer = (accum, { eurCount }) => Math.max(accum, eurCount)
    const maxFilteredFromAllEurVal = filteredFromAllEurVal.reduce(reducer, 0)
    const maxTransaction = allTransactionList.find(
      ({ eurCount }) => eurCount === maxFilteredFromAllEurVal
    )
    const maxTransactName = maxTransaction.nameOfTransaction
    const maxTransactEur = maxTransaction.eurCount
    const maxTransactPln = (maxTransactEur * euroToPlnExchangeRate).toFixed(2)
    return [maxTransactName, maxTransactEur, maxTransactPln]
  }
  return ['Brak transakcji', 'Brak transakcji', 'Brak transakcji']
}
