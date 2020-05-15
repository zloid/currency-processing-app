import React from 'react'
import { render, screen } from 'features/test-utils'
import '@testing-library/jest-dom/extend-expect'
//own
import ResultInfoBoard from 'features/addNewTransaction/ResultInfoBoard'

describe('ResultInfoBoard', () => {
  it('Suma wszystkich transakcji - exist', () => {
    const { getByText } = render(<ResultInfoBoard />)

    getByText(/suma wszystkich transakcji/i)
    expect(screen.getByTitle('resultInfoBoard-eur-first').textContent).toBe('w EURO: ')
    getByText(/877/)
    expect(screen.getByTitle('resultInfoBoard-pln-first').textContent).toBe('w PLN: ')
    getByText(/3727.25/)
  })
  it('Największa transakcja - exist', () => {
    const { getByText } = render(<ResultInfoBoard />)

    getByText(/największa transakcja/i)
    getByText(/nazwa/i)
    getByText(/test transaction/i)
    expect(screen.getByTitle('resultInfoBoard-eur-second').textContent).toBe('Kwota w EURO: ')
    getByText(/777/)
    expect(screen.getByTitle('resultInfoBoard-pln-second').textContent).toBe('Kwota w PLN: ')
    getByText(/3302.25/)
  })
})
