package dev.levent.movies;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

//mongodb üzerinde movies collectionsu Movies sıınıfı içeriği ile oluşturuluyor
@Document(collection = "Movies")
//lombok ile getter setter toString() gibi fonksiyonların otomatik oluştuurlması için
@Data
//kurucu fonksiyonları otomatik olarak oluşturmak için
@AllArgsConstructor
@NoArgsConstructor
public class Movie {
    //ıd değişkenini benzersiz belirtmek için @Id işlevi kullanılır
    @Id
    private ObjectId id;

    private String imdbId;

    private String title;

    private String releaseDate;

    private String trailerLink;

    private String poster;

    private List<String> genres;

    private List<String> backdrops;

    //Review belgesine reviewIds ile referans vermek için
    @DocumentReference
    private List<Review> reviewIds;


}
