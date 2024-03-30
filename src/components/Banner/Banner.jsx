import { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import BannerButton from "./BannerButton";
import Poster from "..//../../assests/Poster.jpg";
function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchPopularMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random(request.data.results.lenght - 1))
        ]
      );
    }
    fetchData();
  })
  return (
    <header
      className={`bg-cover bg-[url("https://image.tmdp.org/t/p/original/${movie?.backdrop_path}")] bg-center text-white object-contain h-[448px]`}
    >
      <div className=" ml-[30px] pt-[140px] h-[190px]">
        <h1 className=" text-5xl font-[800] pb-[0.3]">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div>
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
        </div>
        <div className=" w-[45rem] leading-5 pt-4 text-xs max-w-[360px] h-[80px]">
          <h1>{movie?.overview}</h1>
        </div>
      </div>
      <div className=" h-[7.4rem] bg-gradient-to-b from-transparent via-rgba(37,37,37,0.61) to-gray-900"></div>
    </header>
  );
}
export default Banner;
