import React from 'react'

const OneTransaction = ({
  idOfNewTransaction,
  nameOfTransaction,
  eurCount,
  plnCountOutput,
  visible,
  funcOnClick,
}) => {
  // const clickHandler = () => {
  //   console.log(idOfNewTransaction)
  // }
  const miniStyle = { border: '1px solid', display: 'inline' }
  return (
    <div>
      {/* <div style={miniStyle}>
        <del>{idOfNewTransaction}</del>
      </div> */}
      <div style={miniStyle}>{nameOfTransaction}</div>
      <div style={miniStyle}>{eurCount}</div>
      <div style={miniStyle}>{plnCountOutput}</div>
      <div style={miniStyle}>
        {/* <del>{visible}</del> */}
      </div>
      <button onClick={funcOnClick}>DELETE</button>
    </div>
  )
}

const AllTransactionsListComponent = ({
  allTransactionList,
  deleteOneTransactionFromList,
  euroToPlnExchangeRate,
}) => {
  const setFloatingPoint = numberForHandler => {
    return +numberForHandler.toFixed(2)
  }

  const listOfAllTransaction = allTransactionList
    .filter(obj => obj.visible === true)
    .map(obj => (
      <OneTransaction
        key={obj.idOfNewTransaction}
        idOfNewTransaction={obj.idOfNewTransaction}
        nameOfTransaction={obj.nameOfTransaction}
        eurCount={obj.eurCount}
        plnCountOutput={setFloatingPoint(obj.eurCount * euroToPlnExchangeRate)}
        // visible={typeof obj.visible}
        funcOnClick={() => deleteOneTransactionFromList(obj.idOfNewTransaction)}
      />
    ))

  return <>
  <strong>AllTransactionsListComponent</strong>
  <br />
  name ------ EUR-----PL ---- del---{listOfAllTransaction}</>
}

export default AllTransactionsListComponent
