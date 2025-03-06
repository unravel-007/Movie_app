// ListMovies.jsx
import React from 'react'
import {
  TableContainer, Table, TableHead, TableRow, TableCell,
  TableBody, Paper
} from '@mui/material'

function ListMovies({ movies }) {
  return (
    <TableContainer component={Paper} style={{ marginTop: '5%' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Year</TableCell>
            <TableCell>Poster</TableCell>
            <TableCell>Genre</TableCell>
            <TableCell>Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movies.map((movie) => (
            <TableRow key={movie.id}>
              <TableCell>{movie.title}</TableCell>
              <TableCell>{movie.year}</TableCell>
              <TableCell>
                {/* Display poster image if available */}
                {movie.poster
                  ? <img src={movie.poster} alt={movie.title} width="50" />
                  : 'No Poster'}
              </TableCell>
              <TableCell>{movie.genre}</TableCell>
              <TableCell>{movie.rating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListMovies
