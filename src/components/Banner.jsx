import axios from "axios";
import React, { useEffect, useState } from "react";

const Banner = () => {

    const [bannerImage, setBannerImage] = useState("");
    const [title,setTitle] = useState("")
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=f53917176284f9516f5fe1073eb186b4')
    .then((response)=>{
        const firstMovie = response.data.results[0];
        const firstMovieTitle = firstMovie.title;
        const firstMoviePoster = firstMovie.backdrop_path;
        setBannerImage(`https://image.tmdb.org/t/p/original${firstMoviePoster}`)
        setTitle(firstMovieTitle)
    })
  }, []);
  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">{title}</div>
    </div>
  );
};

export default Banner;
