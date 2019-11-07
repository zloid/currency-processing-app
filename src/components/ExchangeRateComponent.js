import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import PropTypes from 'prop-types'

const ExchangeRateComponent = ({
  startCount,
  euroToPlnExchangeRate,
  setNewEuroToPlnExchangeRate,
}) => {
  const [rate, setRate] = useState(euroToPlnExchangeRate)

  //get good float-like string and do action
  const handlerForInputField = e => {
    let middleValue = e.target.value
      .replace(/[^0-9.]/, '')
      .replace(/^\./, '0.')
      .replace(/^0+(\d)/, '$1')
      .replace(/(\s*\.\s*)+/g, '$1')
      .replace(/(\d+\.\d+)\./g, '$1')
    setRate(middleValue)
    setNewEuroToPlnExchangeRate(+middleValue)
  }

  return (
    <Row>
      <Col>
        <strong>{startCount} EURO =</strong>{' '}
        <input type="text" value={rate} onChange={handlerForInputField}  className="inputOne"/>
        {' '}
        <strong>PLN</strong>
      </Col>
      <Col xs={8}>
        <h3>Przelicznik walutowy</h3>
      </Col>
    </Row>
  )
}

ExchangeRateComponent.propTypes = {
  startCount: PropTypes.number.isRequired,
  euroToPlnExchangeRate: PropTypes.number.isRequired,
  setNewEuroToPlnExchangeRate: PropTypes.func.isRequired,
}

export default ExchangeRateComponent
