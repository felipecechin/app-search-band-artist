import { render, screen } from '@testing-library/react'

import Header from '.'

describe('Header component', () => {
    it('should render correctly', () => {
        render(<Header />)
        expect(screen.getByText('Band or artist search')).toBeInTheDocument()
    })

    it('should has header tag', () => {
        const { container } = render(<Header />)

        const header = container.querySelector('header')
        expect(header).toBeInTheDocument()
    })
})
