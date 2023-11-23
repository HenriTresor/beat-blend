'use client'
import { Song, SongProviderTypes } from '@/types'
import React, { createContext, useState } from 'react'

type Props = {
    children: React.ReactNode
}



export const songsContext = createContext<SongProviderTypes>({ songs: [], setSongs: () => { } })

function SongProvider({ children }: Props) {

    const [songs, setSongs] = useState<Song[]>([])

    const value = {
        songs, setSongs
    }
    return (
        <songsContext.Provider value={value}>
            {children}
        </songsContext.Provider>
    )
}

export default SongProvider