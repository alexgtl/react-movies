/* eslint-disable react/prop-types */

export default function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h1 className="movie-title">{movie.title}</h1>
      <img src={movie.thumbnailImageSrc} alt="" height="375" width="250" />
    </div>
  )
}
