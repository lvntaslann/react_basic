package dev.levent.movies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication

public class MoviesApplication {

	public static void main(String[] args) {
		//spring boot başlatılması için gerekli fonksiyon
		SpringApplication.run(MoviesApplication.class, args);
	}
	@Bean
	public WebMvcConfigurer configure(){
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry reg){
				reg.addMapping("/*").allowedOrigins("*");
			}
		};
	}

}
