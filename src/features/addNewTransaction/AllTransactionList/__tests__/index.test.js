import React from 'react'
import { render, screen } from 'features/test-utils'
import '@testing-library/jest-dom/extend-expect'
//own
import AllTransactionList from 'features/addNewTransaction/AllTransactionList'

describe('AllTransactionList', () => {
  it('header is exist', () => {
    const { getByText } = render(<AllTransactionList />)

    getByText(/lista dodanych transakcji/i)
    getByText(/nazwa/i)
    getByText(/kwota w euro/i)
    getByText(/kwota w pln/i)
  })

  it('two transactions are displayed', () => {
    const { getByText } = render(<AllTransactionList />)
    const dellButtonsArray = screen.getAllByText(/usuń/i)

    getByText('Test transaction')
    getByText('777')
    getByText('3302.25')
    getByText('11/6/2019, 9:00:25 PM')
    getByText('100')
    getByText('425')
    expect(dellButtonsArray.length).toBe(2)
  })
})
