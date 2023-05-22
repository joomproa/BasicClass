import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { allapimovie, allapiuser } from '../allapis';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  _ITEMS:any = [];
  _UPCOMINGMOVIES:any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.GetUpcomingMovies();
    this.GetNamesData();
    this.GetMovieDetails();
  }

  GetUpcomingMovies(){
    this.http.get(allapimovie.movies.getupcoming).subscribe(
      (res:any) => {
        this._UPCOMINGMOVIES = res.results;
        console.log(res.results);
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

  GetMovieDetails(){
    this.http.get(allapimovie.movies.getdetails + 552 + allapimovie.movies.api_key).subscribe(
      (res:any) => {
        console.log(res);
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

  GetNamesData(){
    this.http.get(allapiuser.user.getalluser).subscribe(
      (res:any) => {
        this._ITEMS = res.data;
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

}
