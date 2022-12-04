import ModalYoutubeVideo from '.'
import { render } from '@testing-library/react'

jest.mock('@/components/shared/SimpleModal', () =>
    jest.fn(({ children }) => (
        <div data-testid='simple-modal-youtube-video'>{children}</div>
    ))
)

describe('ModalYoutubeVideo component', () => {
    it('should render correctly', async () => {
        const onCloseMock = jest.fn()
        const { container } = render(
            <ModalYoutubeVideo
                onClose={onCloseMock}
                open={true}
                videoId='embed-video-id-test'
            />
        )

        const iframeElement = container.querySelector(
            'iframe'
        ) as HTMLIFrameElement
        const tagLinkElement = container.querySelector('a') as HTMLAnchorElement
        expect(iframeElement).toBeInTheDocument()
        expect(iframeElement.src).toBe(
            'https://www.youtube.com/embed/embed-video-id-test'
        )
        expect(tagLinkElement).toBeInTheDocument()
        expect(tagLinkElement.href).toBe(
            'https://www.youtube.com/watch?v=embed-video-id-test'
        )
    })

    it('should not render iframe and link tag if videoId is null', async () => {
        const onCloseMock = jest.fn()
        const { container } = render(
            <ModalYoutubeVideo
                onClose={onCloseMock}
                open={true}
                videoId={null}
            />
        )

        expect(container.querySelector('iframe')).not.toBeInTheDocument()
        expect(container.querySelector('a')).not.toBeInTheDocument()
    })
})
