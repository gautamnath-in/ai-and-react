import './App.css'

import ContextProvider from './interChangingData/ContextProvider';
import SearchMovie from './components/SearchMovie';
import SearchTerm from './components/SearchTerm';
import MovieList from './components/MovieList';
import Fetch from "./components/api/Fetch";
import NowPlaying from './components/NowPlaying';

function App() {

  // Fetch(); //this handles the API Request

  return (
    <>
      <ContextProvider>
        <Fetch />
        <SearchMovie />
        <NowPlaying />
        <div className=" md:w-5/6 mx-auto">
          <SearchTerm />
          <MovieList />
        </div>
      </ContextProvider>
    </>
  )
}

export default App
