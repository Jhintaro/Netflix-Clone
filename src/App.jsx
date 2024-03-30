import './App.css'
import List from './components/List'
import requests from './requests'
function App() {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>
        Hello World
      </h1>
      <List title={'Trending This Week'} fetchUrl={requests.fetchTrending} isLargeRow></List>
      <List title={'Top Rated Movies'} fetchUrl={requests.fetchPopularMovies}></List>
      <List title={'Top Rated Series'} fetchUrl={requests.fetchTopRatedSeries}></List>
      <List title={'Popular Movies'} fetchUrl={requests.fetchPopularMovies}></List>
      <List title={'Popular Series'} fetchUrl={requests.fetchPopularSeries}></List>
    </div>
  )
}

export default App
