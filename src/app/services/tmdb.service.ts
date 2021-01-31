import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TmdbService {

  apiUrl: string = `${environment.api}/movie/top_rated?api_key=${environment.apiKey}`;
  detailUrl: string;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getMovieDetail(id: string): Observable<any> {
    this.detailUrl = `${environment.api}/movie/${id}?api_key=${environment.apiKey}`
    return this.http.get(this.detailUrl);
  }
}
