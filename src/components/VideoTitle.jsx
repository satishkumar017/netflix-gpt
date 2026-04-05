import React from 'react'

const VideoTitle = ({title,overview}) => {
    
  return (
      <div className='pt-[20%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black to-transparent '>
          <h1 className='text-4xl font-bold '>{title}</h1>
          <p className='font-semibold py-6 w-1/3 text-lg'>{overview}</p>
          <div>
              <button className="bg-white px-10 py-4 font-bold text-black rounded-lg hover:bg-gray-400"> ▶ Play</button>
              <button  className="bg-white mx-3 px-10 py-4 font-bold text-black  rounded-lg  hover:bg-gray-400">ℹ More Info</button>
          </div>
      
    </div>
  )
}

export default VideoTitle;
