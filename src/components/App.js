import React from 'react'
import ExchangeRateContainer from '../containers/ExchangeRateContainer'
import MainExchangeContainer from '../containers/MainExchangeContainer'
import AllTransactionsListContainer from '../containers/AllTransactionsListContainer'
import { Container } from 'react-bootstrap'

import './App.css'



function App() {
  return (
      <Container>
        <ExchangeRateContainer />
        <MainExchangeContainer />
        <AllTransactionsListContainer />
      </Container>
  )
}

export default App
