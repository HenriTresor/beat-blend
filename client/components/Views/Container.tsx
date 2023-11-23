import React from 'react'
import { PlayCircleIcon, PauseCircleIcon, SkipForwardIcon, SkipBackIcon, PlusCircleIcon } from 'lucide-react'
import Song from './Song'
import dayjs from 'dayjs';

type Props = {}

function Container({ }: Props) {
    return (
        <div
            className='gradient-bg w-1/3 h-[80%] p-2 shadow-white border-b-2 flex flex-col '
        >
            <div className='w-full p-2 flex justify-between items-center font-bold text-[1.2rem] '>
                {
                    dayjs(Date.now()).format('A') === 'AM' ?
                        <h1>Good Morning</h1>
                        :
                        <h1>Good Evening</h1>
                }

                <button className='action-btn'>
                    <PlusCircleIcon />
                </button>
            </div>
            <div className='flex-grow overflow-auto '>
                {/* {
                    [1, 2, 3, 4, 4, 5, 6, 7, 6].map(song => (
                        <Song name='name' artist='artist' key={song} />
                    ))
                } */}
            </div>
            <div className='w-full p-3  bg-[#141414] flex items-center justify-between rounded-md'>
                <div className='w-1/2'>
                    <h1 className='font-bold capitalize'> Song name</h1>
                    <p className='text-neutral-700'>Artist</p>
                </div>
                <div className='w-1/2 flex justify-evenly'>
                    <button className='action-btn'>
                        <SkipBackIcon />
                    </button>
                    <button className='action-btn'>
                        <PlayCircleIcon />
                    </button>
                    <button className='action-btn'>
                        <SkipForwardIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Container