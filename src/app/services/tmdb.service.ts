import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import * as _ from 'underscore';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  apiUrl: string = `${environment.api}/movie/top_rated?api_key=${environment.apiKey}`;
  detailUrl: string = `${environment.api}/movie/top_rated?api_key=${environment.apiKey}`;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMovieDetail(id: string): Observable<any> {
    return this.http.get(this.detailUrl);
  }
}
