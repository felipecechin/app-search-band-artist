import { FaExternalLinkAlt } from 'react-icons/fa'
import SimpleModal from '@/components/shared/SimpleModal'
import styles from './styles.module.scss'

interface IModalYoutubeVideo {
    open: boolean
    onClose: () => void
    videoId: string | null
}

export default function ModalYoutubeVideo({
    open,
    onClose,
    videoId,
}: IModalYoutubeVideo): JSX.Element {
    return (
        <SimpleModal
            onClose={onClose}
            open={open}
        >
            {videoId != null && (
                <>
                    <div className={styles.videoResponsive}>
                        <iframe
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                            frameBorder='0'
                            height='480'
                            src={'https://www.youtube.com/embed/' + videoId}
                            title='Embedded youtube'
                            width='853'
                        />
                    </div>
                    <a
                        className='w-full mx-auto flex items-center justify-center mt-4 p-4 bg-cyan-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-white'
                        href={'https://www.youtube.com/watch?v=' + videoId}
                        rel='noreferrer'
                        target='_blank'
                    >
                        Youtube
                        <FaExternalLinkAlt className='ml-2' />
                    </a>
                </>
            )}
        </SimpleModal>
    )
}
