import { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import MovieList from './components/MovieList'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useState } from 'react'

function App() {
  const [sort] = useState(false)

  const { search } = useSearch()
  const { movies, loading } = useMovies({ sort })

  console.log(movies)

  useEffect(() => {
    console.log('SEARCH CHANGED')
  }, [search, movies, sort])
  return (
    <div className="page">
      <Header />

      <main className="main">
        {loading ? <p> Loading movies...</p> : <MovieList movies={movies} />}
      </main>

      <footer>hey</footer>
    </div>
  )
}

export default App
