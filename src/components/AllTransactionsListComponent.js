import React from 'react'
import PropTypes from 'prop-types'
import OneTransactionComponent from './OneTransactionComponent'
import { Row, Col, Badge } from 'react-bootstrap'

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
        <h4>Lista dodanych transakcji</h4>
        <br />
        {/* <Col xs={12}> */}
          <Row>
            <Col xs={1}>NAZWA </Col>
            <Col xs={2}></Col>
            <Col xs={3}>KWOTA W EURO</Col>
            <Col xs={3}>KWOTA W PLN</Col>
          </Row>
        {/* </Col> */}
        {listOfAllTransaction}
        <br />
        <h4>
          <Badge variant="info">Suma wszystkich transakcji</Badge>
        </h4>

        <strong>EURO : {countedAllEurTransaction}</strong>

        <br />

        <strong>
          PLN :{' '}
          {setFloatingPoint(countedAllEurTransaction * euroToPlnExchangeRate)}
        </strong>

        <br />
        <hr />
      </Col>
      <Col xs={4}>
        <h4>Największa transakcja</h4>
        <br />
        <strong>Nazwa :</strong> {nameOfMaxEurTransaction}
        <hr />
        <strong>Kwota w PLN :</strong>{' '}
        {setFloatingPoint(maxValueOfEurTransaction * euroToPlnExchangeRate)}
        <hr />
        <strong>Kwota w EURO :</strong> {maxValueOfEurTransaction}
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
