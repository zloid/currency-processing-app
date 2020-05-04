import React from 'react'
import { render, screen } from 'features/test-utils'
import '@testing-library/jest-dom/extend-expect'
//own
import EuroToPlnExchangeRate from 'features/addNewTransaction/EuroToPlnExchangeRate'

describe('EuroToPlnExchangeRate', () => {
  it('input field val is 4.25', () => {
    render(<EuroToPlnExchangeRate />)

    const inputOfEuroToPlnExchangeRate = screen.getByLabelText(
      'euro-to-pln-exchange-rate'
    )

    expect(inputOfEuroToPlnExchangeRate.value).toBe('4.25')
  })
  it('1 euro <- sign exist', () => {
    const { getByText } = render(<EuroToPlnExchangeRate />)

    getByText(/1 euro =/i)
  })
  it('pln <- sign exist', () => {
    const { getByText } = render(<EuroToPlnExchangeRate />)

    getByText(/pln/i)
  })
  it('przelicznik walutowy <- sign exist', () => {
    const { getByText } = render(<EuroToPlnExchangeRate />)

    getByText(/przelicznik walutowy/i)
  })
})
