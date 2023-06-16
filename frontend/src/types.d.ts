type Id = {
  timestamp: number;
  date: string;
};

export interface Review {
  id: Id;
  body: string;
}

export interface Movie {
  id: Id;
  imdbId: string;
  title: string;
  releaseDate: string;
  trailerLink: string;
  poster: string;
  genres: string[];
  backdrops: string[];
  reviewIds: Review[];
}
