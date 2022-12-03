export interface IAttractionItem {
    name: string
    id: string
    externalLinks?: {
        youtube?: {
            url: string
        }[]
        twitter?: {
            url: string
        }[]
        facebook?: {
            url: string
        }[]
        spotify?: {
            url: string
        }[]
        wiki?: {
            url: string
        }[]
        instagram?: {
            url: string
        }[]
        homepage?: {
            url: string
        }[]
    }
    images: {
        url: string
        width: number
        height: number
    }[]
}
