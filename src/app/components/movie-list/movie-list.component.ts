import { Component, OnInit } from '@angular/core';
import { TmdbService } from './../../services/tmdb.service';
import { Movie } from './../../interfaces/movie.interface';
import * as _ from 'underscore';

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
      this.movieList = movies.results;
    });
  }

  sort(sortBy: string) {
    if (sortBy === 'vote_average') {
      // pff! 
      this.movieList = _.sortBy({...this.movieList}, sortBy);
      this.movieList.reverse();
    } else {
      this.movieList = _.sortBy({...this.movieList}, sortBy);
    }
  }
}
