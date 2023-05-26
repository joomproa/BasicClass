import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { allapimovie, allapiuser } from '../allapis';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  slideroptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  // local propeties
  _topratedmovie = true;

  // global properties
  _ITEMS:any = [];
  _UPCOMINGMOVIES:any = [];
  _TOPRATEDMOVIES:any = [];
  _POPULARMOVIES:any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.GetTopRatedMovies();
    this.GetPopularMovies();
    this.GetUpcomingMovies();
    this.GetNamesData();
  }

  SwitchButton(){
    if(this._topratedmovie === true){
      this._topratedmovie = false;
    }
    else{
      this._topratedmovie = true;
    }
  }



  GetUpcomingMovies(){
    this.http.get(allapimovie.movies.getupcoming).subscribe(
      (res:any) => {
        this._UPCOMINGMOVIES = res.results;
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

  GetTopRatedMovies(){
    this.http.get(allapimovie.movies.gettoprated).subscribe(
      (res:any) => {
        this._TOPRATEDMOVIES = res.results;
        console.log(res.results);
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

  GetPopularMovies(){
    this.http.get(allapimovie.movies.getpopular).subscribe(
      (res:any) => {
        this._POPULARMOVIES = res.results;
        console.log(res.results);
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
