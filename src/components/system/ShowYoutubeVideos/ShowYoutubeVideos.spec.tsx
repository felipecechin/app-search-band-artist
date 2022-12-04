import { render, screen } from '@testing-library/react'

import ShowYoutubeVideos from '.'

const youtubeVideos = [
    {
        etag: 'etag-test-1',
        id: {
            videoId: 'videoId-test-1',
        },
        snippet: {
            title: 'title-test-1',
            description: 'description-test-1',
            channelTitle: 'channelTitle-test-1',
            thumbnails: {
                high: {
                    url: 'https://i.ytimg.com/vi/1Q8fG0TtVAY/hqdefault.jpg',
                    width: 300,
                    height: 400,
                },
            },
        },
    },
    {
        etag: 'etag-test-2',
        id: {
            videoId: 'videoId-test-2',
        },
        snippet: {
            title: 'title-test-2',
            description: 'description-test-2',
            channelTitle: 'channelTitle-test-2',
            thumbnails: {
                high: {
                    url: 'https://i.ytimg.com/vi/1Q8fG0TtVAY/hqdefault.jpg',
                    width: 300,
                    height: 400,
                },
            },
        },
    },
]

describe('ShowYoutubeVideos component', () => {
    it('should render correctly', async () => {
        render(<ShowYoutubeVideos videos={youtubeVideos} />)

        expect(
            screen.getByTestId('container-card-videos').children
        ).toHaveLength(2)
    })
})
