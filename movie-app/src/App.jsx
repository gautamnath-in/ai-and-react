import './App.css'

import ContextProvider from './interChangingData/ContextProvider';
import SearchMovie from './components/SearchMovie';
import SearchTerm from './components/SearchTerm';
import MovieList from './components/MovieList';
import Fetch from "./components/api/Fetch";

function App() {

  // Fetch(); //this handles the API Request

  return (
    <>
      <ContextProvider>
        <Fetch />
        <SearchMovie />
        <SearchTerm />
        <MovieList />
      </ContextProvider>
    </>
  )
}

export default App
