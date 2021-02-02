import { createAction } from "@ngrx/store";

export const getNext = createAction("[Movie Component] Get Next");
export const getPrevious = createAction("[Movie Component] Get Previous");
export const getMovies = createAction("[Movie Component] Get Movies");
export const moviesOK = createAction("[Movies API] Movies Loaded Success");