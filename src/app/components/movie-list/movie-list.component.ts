import { Component, OnInit } from '@angular/core';
import { TmdbService } from './../../services/tmdb.service';
import { Movie } from './../../interfaces/movie.interface';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
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
