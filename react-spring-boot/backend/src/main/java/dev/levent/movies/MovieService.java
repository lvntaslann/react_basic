package dev.levent.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

//spring konteynei ile bean olarak tanımlandı(nesne)
@Service
public class MovieService {
    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> allMovies(){
        //findAll sınıfmı MovieRepositorydeki mongodb sınıfı sayesinde kullanıldı
        return movieRepository.findAll();

    }

    // null safety olması için varlığını veya yokluğu daha güvenli kontrolü için Optional kullanılır
    //id ile eşşlen bir film yoksa Optional.empty() döndürür

    public Optional<Movie> singleMovie(String imdbId){
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
