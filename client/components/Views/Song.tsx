import React from 'react'
import { MoreVerticalIcon } from 'lucide-react'
import { Song } from '@/types'

interface Props extends Song {
    onClick: (vl: any) => any;
}

function SongComponent({ name, onClick }: Props) {
    return (
        <div
            onClick={onClick}
            className='song-container flex items-center p-2 mb-2 mt-2 justify-between cursor-pointer'>
            <div className={`flex items-center gap-4`}>
                <div className='w-[50px] h-[50px] bg-green-800 font-bold rounded-full grid place-content-center'>
                    BT
                </div>
                <div>
                    <h1 className='font-bold capitalize'>{name.substring(0, 40)} ...</h1>
                    <p className='text-neutral-700'>unknown</p>
                </div>
            </div>

            <button>
                <MoreVerticalIcon />
            </button>
        </div>
    )
}

export default SongComponent