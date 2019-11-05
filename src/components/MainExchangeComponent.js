import React, { useState } from 'react'
import PropTypes from 'prop-types'

const MainExchangeComponent = ({ startCount, startCountResult, euroToPlnExchangeRate }) => {
  const [count, setCount] = useState(startCount)
  const [resultCount, setResultCount] = useState(startCountResult)

  
  //get good float-like string
  const handlerForInputField = e => {
    let middleValue = e.target.value
      .replace(/[^0-9.]/, '')
      .replace(/^\./, '0.')
      .replace(/^0+(\d)/, '$1')
      .replace(/(\s*\.\s*)+/g, '$1')
      .replace(/(\d+\.\d+)\./g, '$1')
    setCount(middleValue)
    setResultCount(setFloatingPoint(middleValue * euroToPlnExchangeRate))
  }

  const setFloatingPoint = numberForHandler => {
    return +numberForHandler.toFixed(2)
  }

  return (
    <div>
      <strong>MainExchangeComponent</strong>
      <fieldset>
        <legend>Name of operation</legend>
        <input type="text" placeholder="write name..." />
      </fieldset>
      <fieldset>
        <legend>EUR</legend>
        <input type="text" value={count} onChange={handlerForInputField} />
      </fieldset>
      <fieldset>
        <legend>PLN</legend>
        <input type="text" value={resultCount} onChange={() => resultCount} />
      </fieldset>
      <button>Nowa transakcja walutowa</button>
      <hr />
    </div>
  )
}

MainExchangeComponent.propTypes = {
  startCount: PropTypes.number.isRequired,
  startCountResult: PropTypes.number.isRequired,
  euroToPlnExchangeRate: PropTypes.number.isRequired,
}
export default MainExchangeComponent
