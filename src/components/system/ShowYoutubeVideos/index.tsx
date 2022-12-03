import CardVideo from './CardVideo'
import { IYoutubeItem } from '@/types/youtubeItem'
import ModalYoutubeVideo from '../ModalYoutubeVideo'
import { useState } from 'react'

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

    const onClick = (videoId: string): void => {
        setShowModalYoutubeVideo({
            visible: true,
            videoId,
        })
    }

    return (
        <>
            <div className='flex flex-col overflow-auto space-y-2'>
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
