import { render, screen } from '@testing-library/react'

import ShowAttractionData from '.'

const attractionData = {
    name: 'name-test',
    id: 'id-test',
    externalLinks: {
        youtube: [
            {
                url: 'youtube-url-test',
            },
        ],
        twitter: [
            {
                url: 'twitter-url-test',
            },
        ],
        facebook: [
            {
                url: 'facebook-url-test',
            },
        ],
    },
    images: [
        {
            url: 'image-url-test',
            width: 300,
            height: 400,
        },
        {
            url: 'image-url-test-2',
            width: 300,
            height: 400,
        },
    ],
}

describe('ShowAttractionData component', () => {
    it('should render correctly', async () => {
        render(<ShowAttractionData data={attractionData} />)

        expect(screen.getByText('name-test')).toBeInTheDocument()
        expect(
            screen.getByTestId('carousel-images').querySelectorAll('img')
        ).toHaveLength(2)

        expect(screen.getByTestId('span-links').children).toHaveLength(3)
    })
})
