import React from 'react'
import { Container, Row } from 'react-bootstrap'
//own
import EuroToPlnExchangeRate from 'features/addNewTransaction/EuroToPlnExchangeRate'
import InputsTransactions from 'features/addNewTransaction/InputsTransactions'
import AllTransactionList from 'features/addNewTransaction/AllTransactionList'
import ResultInfoBoard from 'features/addNewTransaction/ResultInfoBoard'

const Layout = () => {
  return (
    <div>
      <Container>
        <EuroToPlnExchangeRate />
        <InputsTransactions />
        <Row>
          <AllTransactionList />          
          <ResultInfoBoard />                    
        </Row>
      </Container>
    </div>
  )
}

export default Layout
