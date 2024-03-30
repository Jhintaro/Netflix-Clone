import './App.css'
import List from './components/List/List'
import requests from './requests'
import Banner from './components/Banner/Banner'
function App() {
  return (
    <div>
      <Banner></Banner>
      <List title={'Trending This Week'} fetchUrl={requests.fetchTrending} isLargeRow></List>
      <List title={'Top Rated Movies'} fetchUrl={requests.fetchPopularMovies}></List>
      <List title={'Top Rated Series'} fetchUrl={requests.fetchTopRatedSeries}></List>
      <List title={'Popular Movies'} fetchUrl={requests.fetchPopularMovies}></List>
      <List title={'Popular Series'} fetchUrl={requests.fetchPopularSeries}></List>
    </div>
  )
}

export default App
