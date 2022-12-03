import 'react-responsive-carousel/lib/styles/carousel.min.css'

import {
    FaFacebook,
    FaGlobe,
    FaInstagram,
    FaSpotify,
    FaTwitter,
    FaWikipediaW,
    FaYoutube,
} from 'react-icons/fa'

import { Carousel } from 'react-responsive-carousel'
import { IAttractionItem } from '@/types/attractionItem'
import styles from './styles.module.scss'

interface IShowAttractionData {
    data: IAttractionItem
}

export default function ShowAttractionData({
    data,
}: IShowAttractionData): JSX.Element {
    return (
        <div className='flex flex-col text-white space-y-4'>
            <p>
                Name: <span className='font-bold'>{data.name}</span>
            </p>
            <div>
                <Carousel
                    autoPlay={true}
                    dynamicHeight={true}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                >
                    {data.images.map((image, index) => (
                        <img
                            alt={data.name + ' image ' + index}
                            className='object-cover'
                            height={image.height}
                            key={image.url}
                            src={image.url}
                            width={image.width}
                        />
                    ))}
                </Carousel>
            </div>
            {data.externalLinks && (
                <span className={styles.spanLinks}>
                    {data.externalLinks.homepage &&
                        data.externalLinks.homepage[0].url && (
                            <a
                                href={data.externalLinks.homepage[0].url}
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaGlobe className='w-5 h-5' />
                            </a>
                        )}
                    {data.externalLinks.facebook &&
                        data.externalLinks.facebook[0].url && (
                            <a
                                href={data.externalLinks.facebook[0].url}
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaFacebook className='w-5 h-5' />
                            </a>
                        )}
                    {data.externalLinks.instagram &&
                        data.externalLinks.instagram[0].url && (
                            <a
                                href={data.externalLinks.instagram[0].url}
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaInstagram className='w-5 h-5' />
                            </a>
                        )}
                    {data.externalLinks.spotify &&
                        data.externalLinks.spotify[0].url && (
                            <a
                                href={data.externalLinks.spotify[0].url}
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaSpotify className='w-5 h-5' />
                            </a>
                        )}
                    {data.externalLinks.twitter &&
                        data.externalLinks.twitter[0].url && (
                            <a
                                href={data.externalLinks.twitter[0].url}
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaTwitter className='w-5 h-5' />
                            </a>
                        )}
                    {data.externalLinks.wiki &&
                        data.externalLinks.wiki[0].url && (
                            <a
                                href={data.externalLinks.wiki[0].url}
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaWikipediaW className='w-5 h-5' />
                            </a>
                        )}
                    {data.externalLinks.youtube &&
                        data.externalLinks.youtube[0].url && (
                            <a
                                href={data.externalLinks.youtube[0].url}
                                rel='noreferrer'
                                target='_blank'
                            >
                                <FaYoutube className='w-5 h-5' />
                            </a>
                        )}
                </span>
            )}
        </div>
    )
}
