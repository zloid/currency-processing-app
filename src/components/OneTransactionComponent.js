import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const OneTransactionComponent = ({
  nameOfTransaction,
  eurCount,
  plnCountOutput,
  funcOnClick,
}) => {
  return (
    <Row>
      <Col xs={3} className="colBorder">
        {nameOfTransaction}
      </Col>
      <Col xs={3} className="colBorder">
        {eurCount}
      </Col>
      <Col xs={4}>{plnCountOutput}</Col>
      <Button onClick={funcOnClick} variant="danger">
        USUŃ
      </Button>
    </Row>
  )
}

OneTransactionComponent.propTypes = {
  nameOfTransaction: PropTypes.string.isRequired,
  eurCount: PropTypes.number.isRequired,
  plnCountOutput: PropTypes.number.isRequired,
  funcOnClick: PropTypes.func.isRequired,
}

export default OneTransactionComponent
