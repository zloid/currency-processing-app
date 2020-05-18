import React from 'react'
import { render, fireEvent, screen } from 'features/test-utils'
// import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom/extend-expect'
//own
import App from 'components/App'

describe('App', () => {
  it('add one transaction and check is existing', () => {
    render(<App />)
    const buttonForAdding = screen.getByLabelText('add-transaction')
    const leftClick = { button: 1 }
    let testWordsArray = screen.getAllByText(/test/i),
        kwotaWEuroArr = screen.queryByText(/987/),
        kwotaWPlnArr = screen.queryByText(/4194.75/)

    expect(testWordsArray.length).toBe(2)    
    expect(kwotaWEuroArr).not.toBeInTheDocument()
    expect(kwotaWPlnArr).not.toBeInTheDocument()
    
    //adding transaction
    fireEvent.click(buttonForAdding, leftClick)

    testWordsArray = screen.getAllByText(/test/i)
    kwotaWEuroArr = screen.getAllByText(/987/)
    kwotaWPlnArr = screen.getAllByText(/4194.75/)
    
    expect(testWordsArray.length).toBe(3)
    expect(kwotaWEuroArr.length).toBe(2)
    expect(kwotaWPlnArr.length).toBe(2)

    // screen.debug(screen.getAllByText(/987/i))
  })

})
  
  //todo: to app.test.js
  /*
  it('delete first transaction is correct', () => {
    // render(<AllTransactionList />)
    render(<App />)
    const dellButtonsArray = screen.getAllByText(/usuń/i)
    // const leftClick = { button: 1 }
    
    console.log('eeeeeeee', dellButtonsArray.map(e => e.textContent))
    fireEvent.click(dellButtonsArray[0])
    fireEvent.click(dellButtonsArray[0])
    fireEvent.click(dellButtonsArray[0])
    fireEvent.click(dellButtonsArray[1])
    fireEvent.click(dellButtonsArray[1])
    // fireEvent.click(dellButtonsArray[0], leftClick)
    // fireEvent.click(dellButtonsArray[1], leftClick)
    // fireEvent.click(dellButtonsArray[1], leftClick)
    console.log('eeeeeeee', dellButtonsArray.map(e => e.textContent))
    console.log('eeeeeeee', dellButtonsArray.map(e => e.textContent))

    expect(dellButtonsArray.length).toBe(20)
  })
*/
   
  /* 
  it('transaction list values from start', () => {
    const { getByText } = render(<App />)
    getByText('Lista dodanych transakcji')
    getByText('nazwa')
    getByText('kwota w euro')
    getByText('kwota w pln')
    getByText('Test transaction')
    getByText('777')
    getByText('3302.25')
    getByText('11/6/2019, 9:00:25 PM')
    getByText('100')
    getByText('425')
  }) 
  */
/* 


  it('get dell button', () => {
    render(<App />)
    const dellButtonsArray = screen.getAllByText(/usuń/i)
    // console.log(dellButtonsArray.map((e) => e.textContent))
    expect(dellButtonsArray.length).toBe(2)
  })
})
 */

/*
todo: delete stuff below later

describe('App', () => {
  it('first left textarea must contain 3.555', () => {
    render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    expect(leftTextareaOne.textContent).toBe('3.555')
  })
  it('second left textarea must contain 9\n3.555\n789', () => {
    render(<App />)
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    expect(leftTextareaTwo.textContent).toBe('9\n3.555\n789')
  })
  it('first right textarea must be empty', () => {
    render(<App />)
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    expect(rightTextareaOne.textContent).toBe('')
  })
  it('second right textarea must contain 9\n789', () => {
    render(<App />)
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    expect(rightTextareaTwo.textContent).toBe('9\n789')
  })
  it('click <Demo> button', () => {
    const { getByText } = render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    fireEvent.click(getByText(/demo/i), leftClick)
    expect(leftTextareaOne.textContent).toBe('5\n11\n1\n2\n2\n4\n4\n8.5\n9')
    expect(leftTextareaTwo.textContent).toBe('1\n2\n2\n3\n4\n8,5\n8.5')
    expect(rightTextareaOne.textContent).toBe('')
    expect(rightTextareaTwo.textContent).toBe('9\n789')
  })
  it('click <Demo> button, after click <Get Result> button', () => {
    const { getByText } = render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    fireEvent.click(getByText(/demo/i), leftClick)
    fireEvent.click(getByText(/get result/i), leftClick)
    expect(leftTextareaOne.textContent).toBe('5\n11\n1\n2\n2\n4\n4\n8.5\n9')
    expect(leftTextareaTwo.textContent).toBe('1\n2\n2\n3\n4\n8,5\n8.5')
    expect(rightTextareaOne.textContent).toBe('5\n11\n4\n9')
    expect(rightTextareaTwo.textContent).toBe('3\n8.5')
  })
  it('click <Delete All> button', () => {
    const { getByText } = render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    fireEvent.click(getByText(/delete all/i), leftClick)
    expect(leftTextareaOne.textContent).toBe('')
    expect(leftTextareaTwo.textContent).toBe('')
    expect(rightTextareaOne.textContent).toBe('')
    expect(rightTextareaTwo.textContent).toBe('')
  })
  it('click <Demo> button, after click <Get Result> button, after click <Delete All> button, after click <Return> button', () => {
    const { getByText } = render(<App />)
    const leftTextareaOne = screen.getByLabelText('input-first-data-textarea')
    const leftTextareaTwo = screen.getByLabelText('input-second-data-textarea')
    const rightTextareaOne = screen.getByLabelText(
      'output-first-right-textarea'
    )
    const rightTextareaTwo = screen.getByLabelText(
      'output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    fireEvent.click(getByText(/demo/i), leftClick)
    fireEvent.click(getByText(/get result/i), leftClick)
    fireEvent.click(getByText(/delete all/i), leftClick)
    fireEvent.click(getByText(/return/i), leftClick)
    expect(leftTextareaOne.textContent).toBe('5\n11\n1\n2\n2\n4\n4\n8.5\n9')
    expect(leftTextareaTwo.textContent).toBe('1\n2\n2\n3\n4\n8.5\n8.5')
    expect(rightTextareaOne.textContent).toBe('')
    expect(rightTextareaTwo.textContent).toBe('')
  })
  it('check length of input and output elements of textareas is correct', () => {
    const { getByText } = render(<App />)
    const lengthOfTextareaElementsOne = screen.getByTitle(
      'length-of-input-first-data-textarea'
    )
    const lengthOfTextareaElementsTwo = screen.getByTitle(
      'length-of-input-second-data-textarea'
    )
    const lengthOfTextareaElementsThree = screen.getByTitle(
      'length-of-output-first-right-textarea'
    )
    const lengthOfTextareaElementsFour = screen.getByTitle(
      'length-of-output-second-right-textarea'
    )
    const leftClick = { button: 1 }
    expect(lengthOfTextareaElementsOne.textContent).toBe('1')
    expect(lengthOfTextareaElementsTwo.textContent).toBe('3')
    expect(lengthOfTextareaElementsThree.textContent).toBe('0')
    expect(lengthOfTextareaElementsFour.textContent).toBe('2')
    fireEvent.click(getByText(/demo/i), leftClick)
    fireEvent.click(getByText(/get result/i), leftClick)
    expect(lengthOfTextareaElementsOne.textContent).toBe('9')
    expect(lengthOfTextareaElementsTwo.textContent).toBe('7')
    expect(lengthOfTextareaElementsThree.textContent).toBe('4')
    expect(lengthOfTextareaElementsFour.textContent).toBe('2')
  })
})
*/
