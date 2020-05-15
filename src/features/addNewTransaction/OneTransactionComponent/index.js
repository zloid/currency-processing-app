/**@module container OneTransactionComponent */
import React from 'react'
import { connect } from 'react-redux'
import { Row, Col, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'
//own
import { deleteOneTransactionFromList } from 'features/addNewTransaction/transactionsSlice'
const mapDispatch = {
  deleteOneTransactionFromList,
}
/**
 * Used to selector selectListOfAllTransaction
 * @function
 * @name OneTransactionComponent
 * @param {{}} props
 * @param {string} props.nameOfTransaction
 * @param {number} props.eurCount float
 * @param {number} props.plnCountOutput float
 * @param {function} props.deleteOneTransactionFromList for dispatch state, send uniq id
 * @param {number} props.idOfNewTransaction uniq
 * @returns {JSX.Element} React elements - one transaction
 */
const OneTransactionComponent = ({
  nameOfTransaction,
  eurCount,
  plnCountOutput,
  deleteOneTransactionFromList,
  idOfNewTransaction,
}) => {
  const getIdForDeleteTransaction = () => {
    deleteOneTransactionFromList(idOfNewTransaction)
  }
  return (
    <Row>
      <Col xs={3} className="colBorder">
        {nameOfTransaction}
      </Col>
      <Col xs={3} className="colBorder">
        {eurCount}
      </Col>
      <Col xs={4}>{plnCountOutput}</Col>
      <Button onClick={getIdForDeleteTransaction} variant="danger">
        usuń
      </Button>
    </Row>
  )
}

OneTransactionComponent.propTypes = {
  nameOfTransaction: PropTypes.string.isRequired,
  eurCount: PropTypes.number.isRequired,
  plnCountOutput: PropTypes.number.isRequired,
  deleteOneTransactionFromList: PropTypes.func.isRequired,
  idOfNewTransaction: PropTypes.number.isRequired,
}

export default connect(null, mapDispatch)(OneTransactionComponent)