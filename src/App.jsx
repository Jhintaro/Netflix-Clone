import "./App.css";
import List from "./components/List/List";
import requests from "./requests";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <List
        title={"Trending This Week"}
        fetchUrl={requests.fetchTrending}
      ></List>
      <List
        title={"Top Rated Movies"}
        fetchUrl={requests.fetchPopularMovies}
      ></List>
      <List
        title={"Top Rated Series"}
        fetchUrl={requests.fetchTopRatedSeries}
      ></List>
      <List
        title={"Popular Movies"}
        fetchUrl={requests.fetchPopularMovies}
      ></List>
      <List
        title={"Popular Series"}
        fetchUrl={requests.fetchPopularSeries}
      ></List>
    </div>
  );
}

export default App;
