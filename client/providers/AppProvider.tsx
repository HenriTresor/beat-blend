import React from 'react'

type Props = {
    children: React.ReactNode
}

function AppProvider({ children }: Props) {
    return (
        <>
            {children}
        </>
    )
}

export default AppProvider