import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import SignUp from './components/SignUp'     
import Login from './components/Login.jsx'       
import AddMovies from './components/AddMovies.jsx'
import ListMovies from './components/ListMovies.jsx' 

function App() {

  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, poster: "..." },
    { id: 2, title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, poster: "..." },
    { id: 3, title: "Interstellar", year: 2014, genre: "Adventure", rating: 8.6, poster: "..." },
    { id: 4, title: "Memento", year: 2000, genre: "Thriller", rating: 8.5, poster: "..." },
  ]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddMovies movies={movies} setMovies={setMovies} />} />
        <Route path="/list" element={<ListMovies movies={movies} />} />
      </Routes>
    </>
  )
}

export default App
