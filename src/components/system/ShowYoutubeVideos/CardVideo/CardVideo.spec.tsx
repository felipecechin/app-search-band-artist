import { fireEvent, render, screen } from '@testing-library/react'

import CardVideo from '.'

const videoMock = {
    etag: 'etag-test',
    id: {
        videoId: 'videoId-test',
    },
    snippet: {
        title: 'title-test',
        description: 'description-test',
        channelTitle: 'channelTitle-test',
        thumbnails: {
            high: {
                url: 'https://i.ytimg.com/vi/1Q8fG0TtVAY/hqdefault.jpg',
                width: 300,
                height: 400,
            },
        },
    },
}

describe('CardVideo component', () => {
    it('should render correctly', async () => {
        const onClickMock = jest.fn()
        render(
            <CardVideo
                onClick={onClickMock}
                video={videoMock}
            />
        )
        expect(screen.getByTestId('card-description').children).toHaveLength(3)

        const image = screen.getByAltText(
            videoMock.snippet.title + ' image'
        ) as HTMLImageElement
        expect(image).toBeInTheDocument()
        expect(image.src).toContain('hqdefault.jpg')
    })

    it('should call onClick function when user click to card', () => {
        const onClickMock = jest.fn()
        render(
            <CardVideo
                onClick={onClickMock}
                video={videoMock}
            />
        )

        fireEvent.click(screen.getByTestId('card-video'))
        expect(onClickMock).toHaveBeenCalled()
    })
})
