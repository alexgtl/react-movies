import { useState, useEffect, useRef } from 'react'

export function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }

    if (search === '') {
      setError('')
      return
    }

    if (search.length <= 3) {
      setError('La busqueda debe tener más de 3 letras')
      return
    }

    setError('')
  }, [search])

  return { search, setSearch, error }
}
