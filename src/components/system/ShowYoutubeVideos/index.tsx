import { useCallback, useState } from 'react'

import CardVideo from './CardVideo'
import { IYoutubeItem } from '@/types/youtubeItem'
import ModalYoutubeVideo from '../ModalYoutubeVideo'

interface IShowYoutubeVideosProps {
    videos: IYoutubeItem[]
}

export default function ShowYoutubeVideos({
    videos,
}: IShowYoutubeVideosProps): JSX.Element {
    const [showModalYoutubeVideo, setShowModalYoutubeVideo] = useState<{
        visible: boolean
        videoId: string | null
    }>({
        visible: false,
        videoId: null,
    })

    const onClick = useCallback((videoId: string): void => {
        setShowModalYoutubeVideo({
            visible: true,
            videoId,
        })
    }, [])

    return (
        <>
            <div
                className='flex flex-col overflow-auto space-y-2'
                data-testid='container-card-videos'
            >
                {videos.map((video) => (
                    <CardVideo
                        key={video.etag}
                        onClick={onClick}
                        video={video}
                    />
                ))}
            </div>
            <ModalYoutubeVideo
                onClose={() =>
                    setShowModalYoutubeVideo({
                        ...showModalYoutubeVideo,
                        visible: false,
                    })
                }
                open={showModalYoutubeVideo.visible}
                videoId={showModalYoutubeVideo.videoId}
            />
        </>
    )
}
