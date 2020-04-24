import React from 'react'
//own
import OneTransactionComponent from 'components/OneTransactionComponent'

export const selectListOfAllTransaction = state => {
  const {
    allTransactionList,
    euroToPlnExchangeRate,
  } = state.transactionsReducer
  return (
    allTransactionList
      // .filter(obj => obj.visible === true)
      .filter(({ visible }) => visible === true)
      .map(({ idOfNewTransaction, nameOfTransaction, eurCount }) => (
        <OneTransactionComponent
          key={idOfNewTransaction}
          idOfNewTransaction={idOfNewTransaction}
          nameOfTransaction={nameOfTransaction}
          eurCount={eurCount}
          plnCountOutput={eurCount * euroToPlnExchangeRate}

          // plnCountOutput={setFloatingPoint(obj.eurCount * euroToPlnExchangeRate)}

        />
      ))
  )
}

export const selectSumOfAllTransactions = state => {
  const {
    allTransactionList,
    euroToPlnExchangeRate,
  } = state.transactionsReducer
  const filteredArray = allTransactionList.filter(
    ({ visible }) => visible === true
  )
  const reducer = (accum, { eurCount }) => accum + eurCount
  const sumEur = filteredArray.reduce(reducer, 0)
  const sumOfAllTransactionsPln = sumEur * euroToPlnExchangeRate
  return [sumEur, sumOfAllTransactionsPln]
}

export const selectMaxValTransaction = state => {
  const {
    allTransactionList,
    euroToPlnExchangeRate,
  } = state.transactionsReducer
  // const allEurVal = allTransactionList.map(({ eurCount }) => eurCount)
  // const maxFromAllEurVal = allEurVal.reduce((a, b) => Math.max(a, b))
  // const maxFilteredFromAllEurVal = allTransactionList.filter(({ visible }) => visible === true).reduce(reducer, 0)
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
    const maxTransactPln = maxTransactEur * euroToPlnExchangeRate
    return [maxTransactName, maxTransactEur,  maxTransactPln]
  }
  // const maxTransactName = 'Lista transakcji jest pusta'
  // const maxTransactEur = null
  // const maxTransactPln = null
  // return [maxTransactEur, maxTransactName, maxTransactPln]
  return ['Brak transakcji', 'Brak transakcji', 'Brak transakcji']
}
