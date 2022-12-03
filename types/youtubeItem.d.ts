export interface IYoutubeItem {
    etag: string
    id: {
        videoId: string
    }
    snippet: {
        title: string
        description: string
        channelTitle: string
        thumbnails: {
            high: {
                url: string
                width: number
                height: number
            }
        }
    }
}
