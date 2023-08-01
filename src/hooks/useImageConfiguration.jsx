import configurationEndpointResults from '../mocks/configurationEndpointResults.json'

export function useImageConfiguration() {
  const { images } = configurationEndpointResults
  const {
    logo_sizes: logoSizes,
    backdrop_sizes: backdropSizes,
    poster_sizes: posterSizes,
  } = images

  return {
    imageUrl: images.secure_base_url,
    sizes: {
      backdropSizes,
      logoSizes,
      posterSizes,
    },
  }
}
