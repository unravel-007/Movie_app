// AddMovies.jsx
import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import Grid from '@mui/material/Grid'

function AddMovies({ movies, setMovies }) {
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [genre, setGenre] = useState('')
  const [rating, setRating] = useState('')
  const [poster, setPoster] = useState('')

  const handleAddMovie = () => {
    const newMovie = {
      id: movies.length + 1,
      title,
      year,
      genre,
      rating,
      poster,
    }
    setMovies([...movies, newMovie])
    // Clear fields
    setTitle('')
    setYear('')
    setGenre('')
    setRating('')
    setPoster('')
  }

  return (
    <Grid container spacing={2} justifyContent="center" style={{ marginTop: '5%' }}>
      <Grid item xs={12} md={4}>
        <h2>Add a New Movie</h2>
        <TextField
          label="Title"
          variant="outlined"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br /><br />
        <TextField
          label="Year"
          variant="outlined"
          fullWidth
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <br /><br />
        <TextField
          label="Genre"
          variant="outlined"
          fullWidth
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <br /><br />
        <TextField
          label="IMDb Rating"
          variant="outlined"
          fullWidth
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <br /><br />
        <TextField
          label="Poster URL"
          variant="outlined"
          fullWidth
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <br /><br />
        <Button variant="contained" onClick={handleAddMovie}>Add Movie</Button>
      </Grid>
    </Grid>
  )
}

export default AddMovies
