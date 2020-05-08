import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col, Badge } from 'react-bootstrap'
//own
import { selectListOfAllTransaction } from 'features/addNewTransaction/selectors'

const mapState = (state) => ({
  allTransactionList: selectListOfAllTransaction(state),
})

const AllTransactionList = ({ allTransactionList }) => {
  return (
    <>
      <Col>
        <h2>
          <Badge variant="info">Lista dodanych transakcji</Badge>
        </h2>
        <Row>
          <Col xs={3} className="fatSign colBorder">nazwa</Col>
          <Col xs={3} className="fatSign colBorder">kwota w euro</Col>
          <Col xs={4} className="fatSign">kwota w pln</Col>
        </Row>
        {allTransactionList}
      </Col>
    </>
  )
}

AllTransactionList.propTypes = {
  allTransactionList: PropTypes.array.isRequired,
}

export default connect(mapState)(AllTransactionList)
