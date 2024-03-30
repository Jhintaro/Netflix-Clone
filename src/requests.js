const API_KEY = 'b0f1ac6513390f3fdbfc29f358fdbf1c';
const requests={
    fetchTrending:`/trending/movie/week?api_key=${API_KEY}`,
    fetchTopRatedMovies:`/tv/popular?api_key=${API_KEY}`,
    fetchTopRatedSeries:`/tv/top_rated?api_key=${API_KEY}`,
    fetchPopularSeries:`/tv/popular?api_key=${API_KEY}`,
    fetchPopularMovies:`/movie/popular?api_key=${API_KEY}`
}
export default requests;