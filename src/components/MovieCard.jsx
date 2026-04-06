import React from 'react'
import { IMG_CDN_URL } from '../Utils/constants'

const MovieCard = ({posterPath}) => {
  return (
      <div className='w-64 flex-shrink-0 pr-10'>
          <img src={IMG_CDN_URL + posterPath}
          alt="movie Card image"/>
      
    </div>
  )
}

export default MovieCard
