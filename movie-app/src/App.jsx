import { useContext, useEffect } from 'react';
import './App.css'
import MovieList from './components/MovieList';
import SearchMovie from './components/SearchMovie';
import { Context } from './interChangingData/Context';
import ContextProvider from './interChangingData/ContextProvider';

function App() {


  // const { searchedValue } = useContext(Context)

  return (
    <>
      <ContextProvider>
        <SearchMovie />
        {/* <h1>You searched for: {searchedValue}</h1> */}
        <MovieList />
      </ContextProvider>
    </>
  )
}

export default App
