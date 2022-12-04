import { fireEvent, render, screen } from '@testing-library/react'

import SimpleModal from '.'

describe('SimpleModal component', () => {
    it('should render correctly', () => {
        const onCloseMock = jest.fn()
        render(
            <SimpleModal
                onClose={onCloseMock}
                open={true}
                title='Test'
            >
                <div>Opened modal</div>
            </SimpleModal>
        )
        expect(screen.getByText('Opened modal')).toBeInTheDocument()
    })

    it('should not render when modal is not opened', () => {
        const onCloseMock = jest.fn()
        render(
            <SimpleModal
                onClose={onCloseMock}
                open={false}
                title='Test'
            >
                <div>Opened modal</div>
            </SimpleModal>
        )
        expect(screen.queryByText('Opened modal')).not.toBeInTheDocument()
    })

    it('should call onClose function when user click to close modal', () => {
        const onCloseMock = jest.fn()
        render(
            <SimpleModal
                onClose={onCloseMock}
                open={true}
                title='Test'
            >
                <div>Opened modal</div>
            </SimpleModal>
        )

        fireEvent.click(screen.getByTestId('close-modal'))
        expect(onCloseMock).toHaveBeenCalled()
    })
})
