import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  constructor(private _http: HttpClient, private router: Router, private route: ActivatedRoute) {
    this.getMovies();
    this.getUpcomingMovies();
  }
  movieList: any[];
  upcomingMovieList: any[];
  ngOnInit(): void {

  }

  getMovies() {
    this._http.get<any>("http://localhost:3000/now-playing").subscribe(res => {
      this.movieList = res;
      console.log({ movies: this.movieList });
    })
  }

  getUpcomingMovies() {
    this._http.get<any>("http://localhost:3000/upcoming-movies").subscribe(res => {
      this.upcomingMovieList = res;
      console.log({ upcomingMovieList: this.upcomingMovieList });
    })
  }

  bookMovie(movie:any){
    localStorage.setItem('movie', JSON.stringify(movie));
    this.router.navigate(['theaters']);
  }
}

