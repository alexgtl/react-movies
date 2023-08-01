import apiConfig from '../apiConfig.json'

export const getImagesConfigFromApi = async () => {
  const { AUTH_TOKEN } = apiConfig
  const { configurationEndpoint } = apiConfig

  const fetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  }

  try {
    const response = await fetch(configurationEndpoint, fetchOptions)
    const { images } = await response.json()

    return images
  } catch (error) {
    throw new Error('Error recuperando la URL de las imágenes')
  }
}

export const fetchMovies = async ({ search }) => {
  const { AUTH_TOKEN } = apiConfig
  const { moviesEndpoint } = apiConfig

  const fetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  }

  try {
    const response = await fetch(
      `${moviesEndpoint}?query=${search}`,
      fetchOptions
    )
    const jsonResponse = await response.json()

    const moviesResult = jsonResponse.results

    return moviesResult
  } catch (error) {
    throw new Error('Error buscando el título en la API')
  }
}

const getOriginalImageSource = async () => {
  const images = await getImagesConfigFromApi()
  return `${images.secure_base_url}original`
}

const getThumbnailImageSource = async () => {
  const images = await getImagesConfigFromApi()
  return `${images.secure_base_url}${images.backdrop_sizes[0]}`
}

const fullImageUrl = await getOriginalImageSource()
const thumbnailImageSrc = await getThumbnailImageSource()

export const getMoviesByName = async ({ search }) => {
  const movies = await fetchMovies({ search })

  return movies?.map((movie) => {
    return {
      id: movie.id,
      title: movie.title,
      sinopsis: movie.overview,
      thumbnailImageSrc: movie.poster_path
        ? `${thumbnailImageSrc}${movie.poster_path}`
        : 'https://placehold.co/250x375',
      posterPath: movie.poster_path
        ? `${fullImageUrl}${movie.poster_path}`
        : '',
    }
  })
}
