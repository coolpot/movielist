import { Component, OnInit } from '@angular/core';
import { TmdbService } from './../../services/tmdb.service';
import { Movie } from './../../interfaces/movie.interface';
import * as _ from 'underscore';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getNext, getPrevious } from '../../movie.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  moviePage$: Observable<any>;
  movies$: Observable<Movie[]> = this.store.select(state => state.movies);

  constructor
    (private tmdbService: TmdbService,
     private store: Store<{ page: number, movies: Movie[] }>)
    {
      this.moviePage$ = store.select('page');
      this.movies$ = store.select('movies');
    }

  ngOnInit(): void {
    this.store.dispatch({ type: '[Movie Component] Get Movies' });
  }

  getNextPage() {
    this.store.dispatch(getNext());
  }

  getPreviousPage() {
    this.store.dispatch(getPrevious());
  }

  getMovies() {
    this.tmdbService.getMovies().subscribe(movies => {
      console.log(movies);
      this.movies$ = movies.results;
    });
  }

  sort(sortBy: string) {
    if (sortBy === 'vote_average') {
      // pff! 
      this.movies$ = _.sortBy({ ...this.movies$ }, sortBy);
      // this.movies$.reverse();
    } else {
      this.movies$ = _.sortBy({ ...this.movies$ }, sortBy);
    }
  }
}
