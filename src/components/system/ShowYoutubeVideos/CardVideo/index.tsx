import { IYoutubeItem } from '@/types/youtubeItem'
import Image from 'next/image'
import styles from './styles.module.scss'

interface ICardVideoProps {
    video: IYoutubeItem
    onClick: (videoId: string) => void
}

export default function CardVideo({
    video,
    onClick,
}: ICardVideoProps): JSX.Element {
    return (
        <div
            className='border-4 border-transparent hover:border-cyan-400 hover:shadow-xl cursor-pointer'
            onClick={() => onClick(video.id.videoId)}
            role={'button'}
        >
            <div className='bg-white grid grid-cols-1 sm:grid-cols-3 h-[200px] relative'>
                <div className='hidden sm:block sm:relative'>
                    <Image
                        alt={video.snippet.thumbnails.high.url + ' image'}
                        fill
                        src={video.snippet.thumbnails.high.url}
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className='sm:col-span-2 flex items-center relative bg-cyan-50'>
                    <div className='flex flex-col justify-center space-y-2 px-6 sm:px-10'>
                        <p className={styles.channelTitle}>
                            {video.snippet.channelTitle}
                        </p>
                        <p className={styles.title}>{video.snippet.title}</p>
                        <p className={styles.description}>
                            {video.snippet.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
