import { createReducer, on } from "@ngrx/store";
import { getMovies, getNext, getPrevious } from './movie.actions';

export const initialState = 1;

const _movieReducer = createReducer(
    initialState,
    on(getNext, state => state + 1),
    on(getPrevious, state => state - 1)
);

export function movieReducer(state, action) {
    return _movieReducer(state, action);
}