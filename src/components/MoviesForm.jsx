import { useState, useCallback } from 'react'
import { useSearch } from '../hooks/useSearch'
import { useMovies } from '../hooks/useMovies'
import debounce from 'just-debounce-it'

export default function MoviesForm() {
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, sort })

  const getDebouncedMovies = useCallback(
    debounce((search) => {
      getMovies({ search })
    }, 500),
    [getMovies]
  )

  const handleSubmit = (event) => {
    event.preventDefault()
    getMovies({ search })
  }

  const handleMovieNameChange = (event) => {
    const newValue = event.target.value
    setSearch(newValue)
    getDebouncedMovies(newValue)
  }

  const handleCheckbox = () => {
    setSort(!sort)
  }

  return (
    <form action="" onSubmit={handleSubmit} className="movies-form">
      <input
        name="textToSearch"
        onChange={handleMovieNameChange}
        style={{
          border: '1px solid transparent',
          borderColor: error ? 'red' : 'transparent',
        }}
        type="text"
        placeholder="Matrix, Lort of the rings..."
      />
      <label htmlFor="checkbox">
        <input type="checkbox" onChange={handleCheckbox} checked={sort} /> Orden
      </label>
      <button type="submit">Buscar peliculas</button>
    </form>
  )
}
