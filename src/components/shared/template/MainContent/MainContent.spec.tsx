import { render, screen } from '@testing-library/react'

import MainContent from '.'

describe('MainContent component', () => {
    it('should render correctly', () => {
        render(
            <MainContent>
                <h1>Test</h1>
            </MainContent>
        )
        expect(screen.getByText('Test')).toBeInTheDocument()
    })

    it('should has main tag', () => {
        const { container } = render(
            <MainContent>
                <h1>Test</h1>
            </MainContent>
        )

        const main = container.querySelector('main')
        expect(main).toBeInTheDocument()
    })
})
