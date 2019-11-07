import React from 'react'
import PropTypes from 'prop-types'

const OneTransactionComponent = ({
  nameOfTransaction,
  eurCount,
  plnCountOutput,
  funcOnClick,
}) => {
  const miniStyle = { border: '1px solid', display: 'inline' }
  return (
    <div>
      <div style={miniStyle}>{nameOfTransaction}</div>
      <div style={miniStyle}>{eurCount}</div>
      <div style={miniStyle}>{plnCountOutput}</div>
      <button onClick={funcOnClick}>DELETE</button>
    </div>
  )
}

OneTransactionComponent.propTypes = {
  nameOfTransaction: PropTypes.string.isRequired,
  eurCount: PropTypes.number.isRequired,
  plnCountOutput: PropTypes.number.isRequired,
  funcOnClick: PropTypes.func.isRequired,
}

export default OneTransactionComponent
