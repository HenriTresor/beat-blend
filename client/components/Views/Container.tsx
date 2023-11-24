'use client'
import React from 'react'
import { PlayCircleIcon, PauseCircleIcon, SkipForwardIcon, SkipBackIcon, PlusCircleIcon } from 'lucide-react'
import Song from './Song'
import dayjs from 'dayjs';
import { songsContext } from '@/providers/SongProvider';

type Props = {}

function Container({ }: Props) {
    const { songs, setSongs, currentSong, setCurrentSong } = React.useContext(songsContext)
    const [currentSongIndex, setCurrentSongIndex] = React.useState(0)
    const audioRef = React.useRef<any>(null)
    const [isPlaying, setIsPlaying] = React.useState(false)
    const handleSongAdd = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedSongs = e.target.files || [];
        const filteredSongs = [...songs];

        for (let i = 0; i < selectedSongs?.length; i++) {
            filteredSongs.push(selectedSongs[i])
        }

        setSongs((prev: []) => {
            return [...filteredSongs]
        })

    }

    const handlePlay = () => {
        console.log(audioRef.current)
        if (currentSong) {
            let songUrl = URL.createObjectURL(currentSong)
            audioRef.current.src = songUrl;
            audioRef.current.play()
            setIsPlaying(true)
        }
    }

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause()
            setIsPlaying(false)
        } else if (currentSong && !isPlaying) {
            audioRef.current.play()
            setIsPlaying(true)
        } else {

        }
    }

    const handleNext = () => {
        if (currentSong && currentSongIndex !== songs.length - 1) {
            setCurrentSong((prev: File) => {
                return songs[currentSongIndex + 1]
            })
            setCurrentSongIndex(prev => prev + 1)
        } else return
    }
    const handlePrev = () => {
        if (currentSong && currentSongIndex !== 0) {
            setCurrentSong((prev: File) => {
                return songs[currentSongIndex - 1]
            })
            setCurrentSongIndex(prev => prev - 1)
        } else return
    }

    React.useEffect(() => {
        handlePlay()
    }, [currentSong])

    return (
        <div
            className='gradient-bg w-1/3 h-[80%] p-2 shadow-white border-b-2 flex flex-col '
        >
            <audio src="" ref={audioRef}></audio>
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
                    songs.map((song, index) => (
                        <Song
                            name={song.name} key={song.name}
                            lastModified={0}
                            webkitRelativePath={''}
                            size={0}
                            type={''}
                            arrayBuffer={function (): Promise<ArrayBuffer> {
                                throw new Error('Function not implemented.');
                            }} slice={function (start?: number | undefined, end?: number | undefined, contentType?: string | undefined): Blob {
                                throw new Error('Function not implemented.');
                            }} stream={function (): ReadableStream<Uint8Array> {
                                throw new Error('Function not implemented.');
                            }} text={function (): Promise<string> {
                                throw new Error('Function not implemented.');
                            }}
                            onClick={() => {
                                setCurrentSong(song)
                                setCurrentSongIndex(index)
                            }}
                        />
                    ))
                }
            </div>
            <div className='w-full p-3  bg-[#141414] flex items-center justify-between rounded-md'>
                <div className='w-1/2'>
                    <h1 className='font-bold capitalize'>{currentSong?.name.substring(0, 40)}...</h1>
                    <p className='text-neutral-700'>unknown</p>
                </div>
                <div className='w-1/2 flex justify-evenly'>
                    <button className='action-btn' onClick={handlePrev}>
                        <SkipBackIcon />
                    </button>
                    <button
                        onClick={handlePlayPause}
                        className='action-btn'>
                        {
                            isPlaying ? <PauseCircleIcon /> : <PlayCircleIcon />
                        }
                    </button>
                    <button className='action-btn' onClick={handleNext}>
                        <SkipForwardIcon />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Container