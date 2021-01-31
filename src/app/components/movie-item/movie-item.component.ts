import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;

  movieList: Movie[] = [];

  constructor(private tmdbService: TmdbService) { }

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies() {
    this.tmdbService.getMovies().subscribe(movies => {
      console.log(movies);
      this.movieList = movies.results;
    });
  }


}
