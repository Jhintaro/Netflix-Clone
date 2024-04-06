import { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import BannerButton from "./BannerButton";
function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.substr(0, maxLength) + "...";
}
function Banner() {
  const base_url = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([null]);
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(requests.fetchPopularMovies);
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        setMovie(request.data.results[randomIndex]);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <header
      className={`relative bg-cover bg-center text-white object-contain h-[448px] mt-16`}
      style={{ backgroundImage: `url(${base_url}${movie?.backdrop_path})` }}
    >
      <div className=" bg-transparent ml-[30px] pt-[140px] h-[190px]">
        <h1 className=" bg-transparent text-5xl font-[800] pb-[0.3]">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className=" bg-transparent">
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
        </div>
        <div className=" bg-transparent w-[45rem] leading-5 pt-4 text-xs max-w-[360px] h-[80px]">
          <h1 className=" bg-transparent ">
            {truncateText(movie?.overview || "", 250)}
          </h1>
        </div>
      </div>
    </header>
  );
}
export default Banner;
