import { useState, type FC, useEffect, useMemo } from 'react';
import MovieCard from './MovieCard';
import type { Movie } from '@/types';

interface MoviesProps {
  searchValue?: string;
}

const Movies: FC<MoviesProps> = ({ searchValue = '' }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const res = await fetch('/api/v1/movies');
    return await res.json();
  };

  let filteredPosts = useMemo(
    () =>
      movies.filter((m) =>
        m.title.toLowerCase().includes(searchValue.toLowerCase())
      ),
    [searchValue, movies]
  );

  useEffect(() => {
    (async () => {
      const data = (await getMovies()) as unknown as Movie[];
      setMovies(data);
    })();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {filteredPosts.map((movie) => (
        <MovieCard movie={movie} key={movie.id.timestamp} />
      ))}
    </div>
  );
};
export default Movies;
