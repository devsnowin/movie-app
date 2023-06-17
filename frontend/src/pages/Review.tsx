import type { Movie, Review } from '@/types';
import { useEffect, type FC, useState, FormEvent } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

interface ReviewProps {}

const Review: FC<ReviewProps> = ({}) => {
  const { id } = useParams();
  const navigation = useNavigate();
  const [movie, setMovie] = useState<Movie>();
  const [review, setReview] = useState<String>('');
  const [loading, setLoading] = useState<boolean>(false);;


  const findMovie = async () => {
    const res = await fetch(`/api/v1/movies/${id}`);
    return await res.json();
  };

  useEffect(() => {
    (async () => {
      const data = (await findMovie()) as Movie;
      setMovie(data);
    })();
  }, [loading]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    await fetch('/api/v1/movies', {
      method: 'POST',
      body: JSON.stringify({ reviewBody: review, imdbId: id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setLoading(false);
    setReview('');
  };

  return (
    <div className="max-w-xl mx-auto my-8 flex flex-col items-center gap-4">
      <button className="self-start" onClick={() => navigation('/')}>
        ⬅ Go back
      </button>
      <div className="flex items-start justify-center gap-8">
        <figure>
          <img src={movie?.poster} alt={movie?.title} className=" rounded-xl" />
        </figure>
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{movie?.title}</h1>
          <p className="text-lg">{movie?.genres}</p>
          <time className="italic">{movie?.releaseDate}</time>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full flex justify-between">
        <input
          type="text"
          value={review as string | number | readonly string[] | undefined}
          onChange={(e) => setReview(e.target.value)}
          className="input input-primary w-[75%]"
          placeholder="write a review..."
          required
        />
        <button className="btn btn-primary w-[20%]">
          { loading ? 
          <span className="loading loading-spinner loading-md"></span>
          : 
          'Submit'}</button>
      </form>
      <div className="w-full my-8">
        <h1 className="font-bold text-lg">Reviews</h1>
        <ul className="divide-y-2 divide-gray-500 flex flex-col gap-4">
          {movie?.reviewIds.map((review) => (
            <li key={review.id.timestamp} className="pt-4">
              {review.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Review;
