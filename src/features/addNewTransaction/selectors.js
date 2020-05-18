/** @module selectors*/
import React from 'react'
//own
import OneTransactionComponent from 'features/addNewTransaction/OneTransactionComponent'
/**
 * 1.00 -> 1; 3.33333 -> 3.33;
 * @function
 * @name numberToFixedFloor
 * @param {number} inNumber float
 * @returns {number} floor, toFixed, float
 */
function numberToFixedFloor(inNumber) {
  return Number(inNumber.toFixed(2))
}
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
        eurCount={numberToFixedFloor(eurCount)}
        // plnCountOutput={Number((eurCount * euroToPlnExchangeRate).toFixed(2))}
        plnCountOutput={numberToFixedFloor(eurCount * euroToPlnExchangeRate)}
      />
    ))
}
/**
 * Selector for counting amount of all transaction in eur and in pln
 * @function
 * @name selectSumOfAllTransactions
 * @param {{}} state whole redux state
 * @param {array.<object>} state.transactionsReducer.allTransactionList array of objects
 * @param {number} state.transactionsReducer.euroToPlnExchangeRate float-number of actual rate
 * @returns {array} [sumEur, sumOfAllTransactionsPln] -two float number in toFixed(2)
 */
export const selectSumOfAllTransactions = (state) => {
  /**
   * State object destructuring
   * @constant {[{visible: boolean, eurCount: number}]} allTransactionList
   */
  const {
    allTransactionList,
    euroToPlnExchangeRate,
  } = state.transactionsReducer
  const filteredArray = allTransactionList.filter(
    ({ visible }) => visible === true
  )
  const reducer = (accum, { eurCount }) => accum + eurCount
  const sumEur = numberToFixedFloor(filteredArray.reduce(reducer, 0))
  const sumOfAllTransactionsPln = numberToFixedFloor(
    sumEur * euroToPlnExchangeRate
  )
  return [sumEur, sumOfAllTransactionsPln]
}
/**
 * Selector for get one biggest transaction from array of all transaction
 * @function
 * @name selectMaxValTransaction
 * @param {{}} state whole redux state
 * @param {array.<object>} state.transactionsReducer.allTransactionList array of objects
 * @param {number} state.transactionsReducer.euroToPlnExchangeRate float-number of actual rate
 * @returns {array} [maxTransactName, maxTransactEur, maxTransactPln] or ['Brak transakcji', 'Brak transakcji', 'Brak transakcji']
 */
export const selectMaxValTransaction = (state) => {
  /**
   * State object destructuring
   * @constant {[{visible: boolean, eurCount: number}]} allTransactionList
   */
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
    const maxTransactEur = numberToFixedFloor(maxTransaction.eurCount)
    const maxTransactPln = numberToFixedFloor(
      maxTransactEur * euroToPlnExchangeRate
    )
    return [maxTransactName, maxTransactEur, maxTransactPln]
  }
  return ['Brak transakcji', 'Brak transakcji', 'Brak transakcji']
}
