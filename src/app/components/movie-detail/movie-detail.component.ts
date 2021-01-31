import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetail } from 'src/app/interfaces/movie-detail.interface';
import { TmdbService } from 'src/app/services/tmdb.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  private sub: any;
  movie: MovieDetail;

  constructor(private tmdbService: TmdbService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      const movieId = params.id;
      this.getMovieDetail(movieId);
    });
  }

  getMovieDetail(movieId: string) {
    this.tmdbService.getMovieDetail(movieId).subscribe(movie => {
      console.log(movie, 'moviee');
      this.movie = movie;
    });
  }
}
