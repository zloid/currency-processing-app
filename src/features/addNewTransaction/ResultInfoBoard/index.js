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
        <span className="fatSign" title="resultInfoBoard-eur-first">w EURO: </span>
        {sumEur}
        <br />
        <span className="fatSign" title="resultInfoBoard-pln-first">w PLN: </span>
        {sumOfAllTransactionsPln}
        <hr />
        <h2>
          <Badge variant="info">Największa transakcja</Badge>
        </h2>
        <span className="fatSign">Nazwa: </span>
        {maxTransactName}
        <br />
        <span className="fatSign" title="resultInfoBoard-eur-second">Kwota w EURO: </span>
        {maxTransactEur}
        <br />
        <span className="fatSign" title="resultInfoBoard-pln-second">Kwota w PLN: </span>
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
