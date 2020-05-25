import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
//own
import { getNewEuroToPlnExchangeRate } from 'features/addNewTransaction/transactionsSlice'
import { selectOnlyFloatNumberString } from 'features/addNewTransaction/selectors'

const mapState = (state) => ({
  euroToPlnExchangeRate: state.transactionsReducer.euroToPlnExchangeRate,
})
const mapDispatch = {
  getNewEuroToPlnExchangeRate,
}

const EuroToPlnExchangeRate = ({
  euroToPlnExchangeRate,
  getNewEuroToPlnExchangeRate,
}) => {
  const doExchange = (e) => {
    //todo
    let middleValue = selectOnlyFloatNumberString(e.target.value)
    return getNewEuroToPlnExchangeRate(Number(middleValue))
  }
  return (
    <>
      <Row>
        <Col>
          <span className="fatSign">1 euro = </span>
          <input
            type="text"
            value={euroToPlnExchangeRate}
            onChange={doExchange}
            aria-label="euro-to-pln-exchange-rate"
            placeholder="exchange-rate"
          ></input>
          <span className="fatSign"> pln</span>
        </Col>
        <Col>
          <h1>Przelicznik walutowy</h1>
        </Col>
      </Row>
    </>
  )
}

EuroToPlnExchangeRate.propTypes = {
  euroToPlnExchangeRate: PropTypes.number.isRequired,
  getNewEuroToPlnExchangeRate: PropTypes.func.isRequired,
}

export default connect(mapState, mapDispatch)(EuroToPlnExchangeRate)
