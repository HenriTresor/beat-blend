import { Song, SongProviderTypes } from '@/types'
import React, { createContext, useState } from 'react'

type Props = {}



export const songsContext = createContext<SongProviderTypes | null>(null)

function SongProvider({ }: Props) {

    const [songs, setSongs] = useState<Song[]>([])

    const value = {
        songs, setSongs
    }
    return (
        <songsContext.Provider value={value}>SongProvider</songsContext.Provider>
    )
}

export default SongProvider