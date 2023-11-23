import React from 'react'
import {PlayCircleIcon, PauseCircleIcon, SkipForwardIcon, SkipBackIcon} from 'lucide-react'

type Props = {}

function Container({}: Props) {
  return (
      <div
      className='gradient-bg w-1/3 h-[80%] p-2 shadow-white border-b-2 flex flex-col '
      >
          <div>
              Header
          </div>
          <div className='flex-grow '>
              Songs
          </div>
          <div className='w-full p-3  bg-[#141414] flex items-center justify-between rounded-md'>
              <div className='w-1/2'>
                  <h1 className='font-bold capitalize'> Song name</h1>
                  <p className='text-neutral-700'>Artist</p>
            </div>
              <div className='w-1/2 flex justify-evenly'>
                  <button className='action-btn'>
                      <SkipBackIcon/>
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