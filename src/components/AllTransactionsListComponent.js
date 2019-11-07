import React from 'react'
import PropTypes from 'prop-types'
import OneTransactionComponent from './OneTransactionComponent'
import { Row, Col } from 'react-bootstrap'

const AllTransactionsListComponent = ({
  allTransactionList,
  deleteOneTransactionFromList,
  euroToPlnExchangeRate,
  countedAllEurTransaction,
  countAllEurTransaction,
  nameOfMaxEurTransaction,
  maxValueOfEurTransaction,
  getMaxValueFromTransactionList,
}) => {
  const setFloatingPoint = numberForHandler => {
    return +numberForHandler.toFixed(2)
  }

  const listOfAllTransaction = allTransactionList
    .filter(obj => obj.visible === true)
    .map(obj => (
      <OneTransactionComponent
        key={obj.idOfNewTransaction}
        idOfNewTransaction={obj.idOfNewTransaction}
        nameOfTransaction={obj.nameOfTransaction}
        eurCount={obj.eurCount}
        plnCountOutput={setFloatingPoint(obj.eurCount * euroToPlnExchangeRate)}
        funcOnClick={() => {
          deleteOneTransactionFromList(obj.idOfNewTransaction)
          countAllEurTransaction()
          getMaxValueFromTransactionList()
        }}
      />
    ))

  return (
    <Row>
      <Col>
      <Col xs={6}>1 <Row>row</Row></Col>
      <Col xs={6}>1</Col>
        name ------ EUR-----PL ---- del---
        
        

        {listOfAllTransaction}
        <br />
        <strong>count All EUR Transaction: {countedAllEurTransaction}</strong>
        <br />
        <strong>
          count All PLN Transaction:{' '}
          {setFloatingPoint(countedAllEurTransaction * euroToPlnExchangeRate)}
        </strong>
        <br />
        <hr />
      </Col>
      <Col xs={4}>
        <strong>MAX VALUE</strong>
        <br />
        name: {nameOfMaxEurTransaction}
        <br />
        valuePL:{' '}
        {setFloatingPoint(maxValueOfEurTransaction * euroToPlnExchangeRate)}
        <br />
        valueEUR: {maxValueOfEurTransaction}
      </Col>
    </Row>
  )
}

AllTransactionsListComponent.propTypes = {
  allTransactionList: PropTypes.array.isRequired,
  deleteOneTransactionFromList: PropTypes.func.isRequired,
  euroToPlnExchangeRate: PropTypes.number.isRequired,
  countedAllEurTransaction: PropTypes.number.isRequired,
  countAllEurTransaction: PropTypes.func.isRequired,
  nameOfMaxEurTransaction: PropTypes.string.isRequired,
  maxValueOfEurTransaction: PropTypes.number.isRequired,
  getMaxValueFromTransactionList: PropTypes.func.isRequired,
}

export default AllTransactionsListComponent
