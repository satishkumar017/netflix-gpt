import React from 'react'
import { useSelector } from "react-redux";
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
  if (!movies || movies.length == 0) return ;
  const mainMovie = movies[10];
  const { title, overview ,id} = mainMovie;
  return (
    <div className="relative">
      <VideoTitle title={title} overview={overview} />
      <VideoBackGround movieId={id}/>
    </div>
  )
}

export default MainContainer;
