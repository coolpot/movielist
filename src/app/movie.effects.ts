import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TmdbService } from './services/tmdb.service';
 
@Injectable()
export class MovieEffects {
 
  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Movies Page] Get Movies'),
    mergeMap(() => this.tmdbService.getMovies()
      .pipe(
        map(movies => ({ type: '[Movies Page] Movies Loaded Success', payload: movies })),
        catchError(() => EMPTY)
      ))
    )
  );
 
  constructor(
    private actions$: Actions,
    private tmdbService: TmdbService
  ) {}
}