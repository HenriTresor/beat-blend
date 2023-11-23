import React from 'react'
import SongProvider from './SongProvider'

type Props = {
    children: React.ReactNode
}

function AppProvider({ children }: Props) {
    return (
        <SongProvider>
            {children}
        </SongProvider>
    )
}

export default AppProvider