import React from 'react'
import PropTypes from 'prop-types'

const ExchangeRateComponent = ({
  startCount,
  startCountResult,
  calculateStartCount,
}) => {
  calculateStartCount()

  return (
    <div>
      <hr />
      ExchangeRateComponent
      <br />
      <strong>обменный курс :</strong>
      <br />
      {startCount} EURO = {startCountResult} PLN
      <hr />
    </div>
  )
}

ExchangeRateComponent.propTypes = {
  startCount: PropTypes.number.isRequired,
  startCountResult: PropTypes.number.isRequired,
  calculateStartCount: PropTypes.func.isRequired,
}

export default ExchangeRateComponent
