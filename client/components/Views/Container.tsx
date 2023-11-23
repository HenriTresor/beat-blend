import React from 'react'

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
          <div className='w-full p-1 bg-[#141414] flex items-center justify-between rounded-md'>
              <div>
                  <h1>Song name</h1>
                  <p>Artist</p>
            </div>
              <div>
                  <button>prev</button>
                  <button>play</button>
                  <button>next</button>
            </div>
          </div>
      </div>
  )
}

export default Container