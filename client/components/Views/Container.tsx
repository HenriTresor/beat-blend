'use client'
import React from 'react'
import { PlayCircleIcon, PauseCircleIcon, SkipForwardIcon, SkipBackIcon, PlusCircleIcon } from 'lucide-react'
import Song from './Song'
import dayjs from 'dayjs';
import { songsContext } from '@/providers/SongProvider';

type Props = {}

function Container({ }: Props) {
    const { songs, setSongs } = React.useContext(songsContext)

    const handleSongAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedSongs = e.target.files || [];
        const filteredSongs = [...songs];

        for (let i = 0; i < selectedSongs?.length; i++) {
            filteredSongs.push(selectedSongs[i])
        }

        setSongs((prev: []) => {
            return [...prev, ...filteredSongs]
        })

    }

    React.useEffect(() => {
        console.log('songs', songs)
    }, [songs])
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

                <input type="file" multiple onChange={handleSongAdd} name="songs" id="songs" hidden />
                <button className='action-btn'>
                    <label htmlFor="songs">
                        <PlusCircleIcon />
                    </label>
                </button>

            </div>
            <div className='flex-grow overflow-auto '>
                {
                    songs.map(song => (
                        <Song name={song.name} key={song.name} lastModified={0} webkitRelativePath={''} size={0} type={''} arrayBuffer={function (): Promise<ArrayBuffer> {
                            throw new Error('Function not implemented.');
                        } } slice={function (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob {
                            throw new Error('Function not implemented.');
                        } } stream={function (): ReadableStream<Uint8Array> {
                            throw new Error('Function not implemented.');
                        } } text={function (): Promise<string> {
                            throw new Error('Function not implemented.');
                        } } />
                    ))
                }
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