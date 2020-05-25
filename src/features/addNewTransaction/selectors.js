/** @module selectors-for-addNewTransaction-feature*/
import React from 'react'
//own
import OneTransactionComponent from 'features/addNewTransaction/OneTransactionComponent'
/**
 * 1.00 -> 1; 3.33333 -> 3.33;
 * @function numberToFixedFloor
 * @param {number} inNumber float
 * @returns {number} floor, toFixed, float
 */
function numberToFixedFloor(inNumber) {
  return Number(inNumber.toFixed(2))
}
/**
 * Selector for displaying active transactions, need JSX.Element OneTransactionComponent for work
 * @function selectListOfAllTransaction
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
 * @function selectSumOfAllTransactions
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
 * @function selectMaxValTransaction
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

/**
 * '0000,1,2,3 ()}{&*(^%)}{}[]' -> '0.123'
 * @function selectOnlyFloatNumberString
 * @param {string} inputMessString input bad string with any character
 * @returns {string} normalized float number-like string
 */
export function selectOnlyFloatNumberString(inputMessString) {
  let middleValue = inputMessString
    // 001.2,3%[]{}^&*() -> 001.2,3
    .replace(/[^0-9.,]/g, '')
    // 001.2,3 -> 001.2.3
    .replace(/,/g, '.')
    // 001.2.3 -> 1.23
    .replace(/^0+(\d)/, '$1')
    // .123 -> 0.123
    .replace(/^\./, '0.')
    // 1.2.3.4.5.6 -> 1.23456
    // 1....2 -> 1.2
    .replace(/\./, '#')
    .replace(/\./g, '')
    .replace(/#/, '.')
  return middleValue
}
