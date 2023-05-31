import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { allapimovie } from '../allapis';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {

  _MOVIEDETAILS:any = {};
  _MOVIEID:any;
  _TVSERIES:any = [];

  constructor(private http:HttpClient, private route:ActivatedRoute) { this._MOVIEID = this.route.snapshot.params['id'] }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.GetMoviesDetails();
    this.GetTVSeries();
  }

  GetMoviesDetails(){
    this.http.get(allapimovie.movies.getdetails + this._MOVIEID + allapimovie.movies.api_key).subscribe(
      (res:any) => {
        this._MOVIEDETAILS = res;
        console.log(res);
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

  GetTVSeries(){
    this.http.get(allapimovie.movies.gettvseries).subscribe(
      (res:any) => {
        this._TVSERIES = res.results;
        console.log(res.results);
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

}
