import { reactSwal, sweetAlertOptions } from '@/utils/sweetAlert'
import { useCallback, useState } from 'react'

import { FaSearch } from 'react-icons/fa'
import Header from '@/components/shared/template/Header'
import { IAttractionItem } from '@/types/attractionItem'
import { IYoutubeItem } from '@/types/youtubeItem'
import MainContent from '@/components/shared/template/MainContent'
import ShowAttractionData from '@/components/system/ShowAttractionData'
import ShowYoutubeVideos from '@/components/system/ShowYoutubeVideos'
import fetcher from '@/utils/fetcher'

interface IYoutubeResponse {
    items: IYoutubeItem[]
}

interface ITicketMasterResponse {
    _embedded?: {
        attractions: IAttractionItem[]
    }
}

export default function Home(): JSX.Element {
    const [searchResults, setSearchResults] = useState<{
        searched: boolean
        videos: IYoutubeItem[]
        attractionData: IAttractionItem | null
    }>({
        searched: false,
        videos: [],
        attractionData: null,
    })

    const handleSubmit = useCallback(
        async (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()

            const form = event.target as typeof event.target & {
                search: HTMLInputElement
            }
            const search = form.search.value
            if (!search) return

            reactSwal.fire({
                title: 'Por favor, aguarde...',
                allowEscapeKey: false,
                allowOutsideClick: false,
            })
            reactSwal.showLoading(null)
            try {
                const [youtubeResponse, ticketMasterResponse]: [
                    IYoutubeResponse,
                    ITicketMasterResponse
                ] = await Promise.all([
                    fetcher({
                        endpoint: 'youtube',
                        queryParams: {
                            q: search,
                            type: 'video',
                            part: 'snippet',
                            maxResults: '20',
                        },
                    }),
                    fetcher({
                        endpoint: 'ticketmaster',
                        queryParams: {
                            keyword: search,
                        },
                    }),
                ])

                const attractionData =
                    ticketMasterResponse._embedded &&
                    ticketMasterResponse._embedded.attractions
                        ? ticketMasterResponse._embedded.attractions[0]
                        : null

                setSearchResults({
                    searched: true,
                    videos: youtubeResponse.items || [],
                    attractionData,
                })

                reactSwal.close()
            } catch (err) {
                reactSwal.fire({
                    title: 'Oops!',
                    icon: 'error',
                    text: 'Ocorreu algum erro ao buscar os dados',
                    confirmButtonColor: sweetAlertOptions.confirmButtonColor,
                })
            }
        },
        []
    )

    return (
        <>
            <Header />
            <MainContent>
                <div className='max-w-6xl mx-auto h-full flex flex-col justify-center my-4 space-y-4'>
                    <div className='bg-gray-700 shadow-xl rounded-xl py-8 px-3 sm:px-8'>
                        <form
                            className='flex flex-row justify-center w-full'
                            onSubmit={handleSubmit}
                        >
                            <input
                                className='w-full max-w-sm border p-2 rounded-md focus:border-transparent focus:outline-none focus:ring-2 focus:ring-cyan-700'
                                name='search'
                                placeholder='Band or artist'
                                type='text'
                            />
                            <button
                                className='p-4 bg-cyan-700 text-white rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-white'
                                type='submit'
                            >
                                <FaSearch />
                            </button>
                        </form>
                    </div>
                    {searchResults.searched && (
                        <div className='grid grid-cols-1 lg:grid-cols-6 gap-2'>
                            <div className='lg:col-span-4'>
                                <div className='bg-gray-700 w-full shadow-xl rounded-xl py-8 px-3 sm:px-8 flex flex-col justify-center flex-grow max-h-[40rem]'>
                                    {searchResults.videos.length > 0 ? (
                                        <ShowYoutubeVideos
                                            videos={searchResults.videos}
                                        />
                                    ) : (
                                        <p className='text-white'>
                                            Records not found
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className='lg:col-span-2'>
                                <div className='bg-gray-700 w-full shadow-xl rounded-xl py-8 px-3 sm:px-8 flex flex-col justify-center'>
                                    {searchResults.attractionData ? (
                                        <ShowAttractionData
                                            data={searchResults.attractionData}
                                        />
                                    ) : (
                                        <p className='text-white'>
                                            Records not found
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </MainContent>
        </>
    )
}
