import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
//own
import { getTransactionData } from 'features/addNewTransaction/transactionsSlice'

const mapDispatch = {
  getTransactionData,
}

const TransactionsInputs = ({ getTransactionData }) => {
  const [transactionText, setTransactionText] = useState('test')
  const [transactionMoney, setTransactionMoney] = useState('987')

  const doTransaction = () =>
    getTransactionData({
      transactionText,
      transactionMoney: Number(transactionMoney),
    })

  return (
    <>
      <Row>
        <Col>
          <input
            value={transactionText}
            onChange={(e) => setTransactionText(e.target.value)}
            aria-label="transaction-name"
            placeholder="Nazwa transakcji"
          ></input>
          <input
            value={transactionMoney}
            onChange={(e) => setTransactionMoney(e.target.value)}
            aria-label="transaction-value"
            placeholder="Kwota w EURO"
          ></input>
          <Button
            onClick={doTransaction}
            aria-label="add-transaction"
            variant="success"
          >
            Dodawanie transakcji walutowej
          </Button>
        </Col>
      </Row>
    </>
  )
}

TransactionsInputs.propTypes = {
  getTransactionData: PropTypes.func.isRequired,
}

export default connect(null, mapDispatch)(TransactionsInputs)
