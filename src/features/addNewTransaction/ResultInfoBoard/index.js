/**@module container-ResultInfoBoard*/
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Col, Badge } from 'react-bootstrap'
//own
import {
  selectSumOfAllTransactions,
  selectMaxValTransaction,
} from 'features/addNewTransaction/selectors'

const mapState = (state) => ({
  sumOfAllTransactions: selectSumOfAllTransactions(state),
  maxTransaction: selectMaxValTransaction(state),
})
/**
 * Used with selectors selectSumOfAllTransactions and selectMaxValTransaction
 * @function
 * @name ResultInfoBoard
 * @param {{}} props
 * @param {array} props.sumOfAllTransactions [sumEur, sumOfAllTransactionsPln]
 * @param {array} props.maxTransaction [maxTransactName, maxTransactEur, maxTransactPln]
 * @returns {JSX.Element} info board with ammount result of all transaction and one max value transaction
 */
const ResultInfoBoard = ({ sumOfAllTransactions, maxTransaction }) => {
  const [sumEur, sumOfAllTransactionsPln] = sumOfAllTransactions
  const [maxTransactName, maxTransactEur, maxTransactPln] = maxTransaction
  return (
    <>
      <Col>
        <h2>
          <Badge variant="info">Suma wszystkich transakcji</Badge>
        </h2>
        <span className="fatSign" title="resultInfoBoard-eur-first">
          w EURO:{' '}
        </span>
        <span title="resultInfoBoard-eur-value">{sumEur}</span>
        <br />
        <span className="fatSign" title="resultInfoBoard-pln-first">
          w PLN:{' '}
        </span>
        <span title="resultInfoBoard-pln-value">{sumOfAllTransactionsPln}</span>
        <hr />
        <h2>
          <Badge variant="info">Największa transakcja</Badge>
        </h2>
        <span className="fatSign">Nazwa: </span>
        <span title="resultInfoBoard-max-transact-name">{maxTransactName}</span>
        <br />
        <span className="fatSign" title="resultInfoBoard-eur-second">
          Kwota w EURO:{' '}
        </span>
        <span title="resultInfoBoard-eur-max">{maxTransactEur}</span>
        <br />
        <span className="fatSign" title="resultInfoBoard-pln-second">
          Kwota w PLN:{' '}
        </span>
        <span title="resultInfoBoard-pln-max">{maxTransactPln}</span>
      </Col>
    </>
  )
}

ResultInfoBoard.propTypes = {
  sumOfAllTransactions: PropTypes.array.isRequired,
  maxTransaction: PropTypes.array.isRequired,
}

export default connect(mapState, null)(ResultInfoBoard)
