package in.devsnow.movieapp.service;

import in.devsnow.movieapp.model.Movie;
import in.devsnow.movieapp.repository.MovieRepository;
//import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> getMovies(){
        return movieRepository.findAll();
    }

    public Optional<Movie> getMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
