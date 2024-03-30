import { useState } from "react";
import axios from "../../axios";
import { useEffect } from "react";
import Poster from "../../assests/Poster.jpg";
function List({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
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
  return (
    <div className=" ml-5 text-white">
      <h2>{title}</h2>
      <div className=" flex overflow-y-hidden overflow-x-scroll p-[20px] no-scrollbar">
        {movies.map((movie, index) => (
          <img
            className={`w-[100px] object-contain max-h-[150px] mr-3 transition-transform duration-[450ms] hover:scale-[1.08] && ${
              isLargeRow &&
              " max-h-[250px] transition-transform duration-[450ms] hover:scale-[1.09]"
            }`}
            key={index}
            //src={Poster}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie?.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}
export default List;
