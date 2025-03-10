package dev.levent.movies;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

//isteklere yanıt verilebilmesi için controller olduğu belirtildi
@RestController
//apiye bu url üzerinden bağlanılacak
@RequestMapping("/api/v1/movies")
//CORS (Cross-Origin Resource Sharing) izin verme işlemi
@CrossOrigin(origins = "*")
public class MovieController {

    //movieservice sınıfına bağımlılıkları otomatik olarak enjekte etmek için
    //MovieService sınıfı spring konteyneri tarafından yönetilen bean olarak tanımlanmalı(service,component)
    @Autowired
    private MovieService movieService;

    //get isteklerine karşılık olarak tüm filmleri döndürüyor
    @GetMapping
    public ResponseEntity<List<Movie>> getAllMovies(){
        return new ResponseEntity<List<Movie>>(movieService.allMovies(),HttpStatus.OK);

    }

    //requestmapping movies gösterdiği için direkt imdbıd ile sorgu yapılabilir
    @GetMapping("/{imdbId}")
    public  ResponseEntity<Optional<Movie>> getSingleMovie(@PathVariable String imdbId){
        return new ResponseEntity<Optional<Movie>>(movieService.singleMovie(imdbId),HttpStatus.OK);
    }

}
