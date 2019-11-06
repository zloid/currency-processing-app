import React from 'react'
import ExchangeRateContainer from '../containers/ExchangeRateContainer'
import MainExchangeContainer from '../containers/MainExchangeContainer'
import AllTransactionsListContainer from '../containers/AllTransactionsListContainer'
import './App.css'

function App() {
  return (
    <>
      <ExchangeRateContainer />
      <MainExchangeContainer />
      <AllTransactionsListContainer />
    </>
  )
}

export default App
