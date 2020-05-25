import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
//own
import { getTransactionData } from 'features/addNewTransaction/transactionsSlice'
import { selectOnlyFloatNumberString } from 'features/addNewTransaction/selectors'

const mapDispatch = {
  getTransactionData,
}

const InputsTransactions = ({ getTransactionData }) => {
  const [transactionText, setTransactionText] = useState('test')
  const [transactionMoney, setTransactionMoney] = useState('987')

  const doTransaction = () =>
    getTransactionData({
      transactionText,
      transactionMoney: Number(transactionMoney),
    })

  const onChangeInputCallback = (e) => {
    let middleValue = selectOnlyFloatNumberString(e.target.value)
    return setTransactionMoney(middleValue)
  }

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
            onChange={onChangeInputCallback}
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

InputsTransactions.propTypes = {
  getTransactionData: PropTypes.func.isRequired,
}

export default connect(null, mapDispatch)(InputsTransactions)
