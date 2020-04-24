import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Col, Badge } from 'react-bootstrap'
//own
import {
  selectSumOfAllTransactions,
  selectMaxValTransaction,
} from 'features/addNewTransaction/selectors'

const mapState = (state) => ({
  sumOfAllTransactions: selectSumOfAllTransactions(state),
  maxTransaction: selectMaxValTransaction(state),
})

const ResultInfoBoard = ({ sumOfAllTransactions, maxTransaction }) => {
  const [sumEur, sumOfAllTransactionsPln] = sumOfAllTransactions
  const [maxTransactName, maxTransactEur, maxTransactPln] = maxTransaction
  return (
    <>
      <Col>
        <h2>
          <Badge variant="info">Suma wszystkich transakcji</Badge>
        </h2>
        <strong>w EURO: </strong>
        {sumEur}
        <br />
        <strong>w PLN: </strong>
        {sumOfAllTransactionsPln}
        <hr />
        <h2>
          <Badge variant="info">Największa transakcja</Badge>
        </h2>
        <strong>Nazwa: </strong>
        {maxTransactName}
        <br />
        <strong>Kwota w EURO: </strong>
        {maxTransactEur}
        <br />
        <strong>Kwota w PLN: </strong>
        {maxTransactPln}
      </Col>
    </>
  )
}

ResultInfoBoard.propTypes = {
  sumOfAllTransactions: PropTypes.array.isRequired,
  maxTransaction: PropTypes.array.isRequired,
}

export default connect(mapState, null)(ResultInfoBoard)
