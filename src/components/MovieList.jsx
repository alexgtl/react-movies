/* eslint-disable react/prop-types */
import MovieCard from './movieCard'

function renderResults(movies) {
  return (
    <ul className="movies-list">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard movie={movie}></MovieCard>
        </li>
      ))}
    </ul>
  )
}

function renderNoResults() {
  return <p>No se encontraron resultados</p>
}

export default function MovieList({ movies }) {
  const hasResults = movies?.length > 0
  return hasResults ? renderResults(movies) : renderNoResults()
}
