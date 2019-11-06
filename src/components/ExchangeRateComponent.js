import React, { useState } from 'react'
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
    <div>
      <hr />
      ExchangeRateComponent
      <br />
      <br />
      <strong>Przelicznik walutowy</strong>
      <br />
      {startCount} EURO ={' '}
      <input type="text" value={rate} onChange={handlerForInputField} />
      PLN
      <hr />
    </div>
  )
}

ExchangeRateComponent.propTypes = {
  startCount: PropTypes.number.isRequired,
  euroToPlnExchangeRate: PropTypes.number.isRequired,
  setNewEuroToPlnExchangeRate: PropTypes.func.isRequired,
}

export default ExchangeRateComponent
