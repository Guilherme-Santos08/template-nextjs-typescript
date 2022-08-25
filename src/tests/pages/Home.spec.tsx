import { render, screen } from '@testing-library/react'

import Home from '../../pages/index'

describe('Home', () => {
  it('renders a hello world', () => {
    render(<Home />)

    screen.getByRole('heading', { name: /hello world/i })
  })
})
