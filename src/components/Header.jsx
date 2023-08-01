import MoviesForm from './MoviesForm'
import { useSearch } from '../hooks/useSearch'

export default function Header() {
  const { error } = useSearch()

  return (
    <header>
      <h1>Buscador de peliculas</h1>
      <MoviesForm />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </header>
  )
}
