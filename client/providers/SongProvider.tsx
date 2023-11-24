'use client'
import { Song, SongProviderTypes } from '@/types'
import React, { createContext, useState } from 'react'

type Props = {
    children: React.ReactNode
}



export const songsContext = createContext<SongProviderTypes>({
    songs: [],
    setSongs: () => { },
    currentSong: null,
    setCurrentSong: () => { }
})

function SongProvider({ children }: Props) {

    const [songs, setSongs] = useState<Song[]>([])
    const [currentSong, setCurrentSong] = useState(null)

    const value = {
        songs, setSongs,
        currentSong, setCurrentSong
    }
    return (
        <songsContext.Provider value={value}>
            {children}
        </songsContext.Provider>
    )
}

export default SongProvider