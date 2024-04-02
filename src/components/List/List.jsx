import { useState } from "react";
import axios from "../../axios";
import { useEffect } from "react";
import Poster from "..//../../assests/Poster.jpg";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
// eslint-disable-next-line react/prop-types
function List({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdp.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);
  const opts = {
    height: "390px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const movieTitle = movie?.name || "";
      const releaseYear = movie?.release_date
        ? movie.release_date.split("-")[0]
        : "";
      const searchQuery = releaseYear
        ? `${movieTitle} ${releaseYear}`
        : movieTitle;

      movieTrailer(searchQuery)
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v"));
          } else {
            console.log("No trailer found for this movie");
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className=" ml-5 text-white">
      <h2>{title}</h2>
      <div className=" flex overflow-y-hidden overflow-x-scroll p-[20px] no-scrollbar">
        {movies.map((movie) => (
          <img
            className={`w-[100px] object-contain max-h-[150px] mr-3 transition-transform duration-[450ms] hover:scale-[1.08] && ${
              isLargeRow &&
              " max-h-[250px] transition-transform duration-[450ms] hover:scale-[1.09]"
            }`}
            key={movie.id}
            src={Poster}
            // src={`${base_url}${
            //   isLargeRow ? movie.poster_path : movie?.backdrop_path
            // }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}
export default List;
