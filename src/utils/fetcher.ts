/* eslint-disable @typescript-eslint/no-explicit-any */
import FetchError from '@/utils/FetchError'
import env from '@/env'

interface IFetcherArgs {
    endpoint: 'youtube' | 'ticketmaster'
    queryParams: Record<string, string>
}

const fetcher = async (args: IFetcherArgs): Promise<any> => {
    const { endpoint, queryParams } = args
    let pathUrl: string
    if (endpoint === 'youtube') {
        pathUrl = env.YOUTUBE_API
        queryParams['key'] = env.YOUTUBE_KEY
    } else {
        pathUrl = env.TICKETMASTER_API
        queryParams['apikey'] = env.TICKETMASTER_KEY
    }

    pathUrl += `?${new URLSearchParams(queryParams).toString()}`

    const response = await fetch(pathUrl, {
        method: 'GET',
    })

    const responseData = await response.json()

    if (!response.ok) {
        throw new FetchError(
            response.status,
            response.statusText,
            responseData ? responseData : null
        )
    }

    return responseData
}

export default fetcher
