import './App.css'

import ContextProvider from './interChangingData/ContextProvider';
import SearchMovie from './components/SearchMovie';
import SearchTerm from './components/SearchTerm';
import MovieList from './components/MovieList';
import Fetch from "./components/api/Fetch";
import NowPlaying from './components/NowPlaying';
import Header from './components/Header';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';

function App() {

  // Fetch(); //this handles the API Request
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ContextProvider>
        <Header />
        <Fetch />
        <SearchMovie />
        <SearchTerm />
        <NowPlaying />
      </ContextProvider>,
    },
    {
      path: "/popular-movies",
      element: <ContextProvider>
        <Header />
        <SearchMovie />
        <div className=" md:w-5/6 mx-auto">
          <Fetch />
          <SearchTerm />
          <MovieList />
        </div>
      </ContextProvider>
    },
    {
      path: '/contact',
      element: <Header />,
      errorElement: <ErrorPage />
    }
  ]);

  return (
    <>

      <RouterProvider router={router} >
        <Outlet />
      </RouterProvider >

    </>
  )
}

export default App
