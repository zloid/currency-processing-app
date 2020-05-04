import React from 'react'
import { render, screen } from 'features/test-utils'
import '@testing-library/jest-dom/extend-expect'
//own
import InputsTransactions from 'features/addNewTransaction/InputsTransactions'

describe('InputsTransactions', () => {
  it('first input value is - test', () => {
    render(<InputsTransactions />)

    const firstInput = screen.getByLabelText('transaction-name')

    expect(firstInput.value).toBe('test')
  })

  it('second input value is 987', () => {
    render(<InputsTransactions />)

    const secondInput = screen.getByLabelText('transaction-value')

    expect(secondInput.value).toBe('987')
  })

  it('Button <Dodawanie transakcji walutowej> is exist', () => {
    render(<InputsTransactions />)

    const buttonForAdding = screen.getByLabelText('add-transaction')

    expect(buttonForAdding.textContent).toBe('Dodawanie transakcji walutowej')
  })
})
