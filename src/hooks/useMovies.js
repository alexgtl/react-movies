import { useRef, useMemo, useState, useCallback } from 'react'
import { getMoviesByName } from '../services/MovieService'

export function useMovies({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [, setError] = useState(null)

  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return

    previousSearch.current = search

    try {
      setLoading(true)
      setError(null)

      const movies = await getMoviesByName({ search })

      setMovies(movies)
    } catch (error) {
      setError('Error loading movies')
      throw new Error(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, loading }
}
