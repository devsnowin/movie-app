import type { Movie } from '@/types';
import { type FC } from 'react';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{movie.title}</h2>
        <p>{movie.releaseDate}</p>
        <div className="card-actions justify-end">
          <Link className="btn btn-primary" to={`/movies/${movie.imdbId}`}>
            Review
          </Link>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
