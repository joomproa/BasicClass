import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {
  _SITETITLE:any;
  _DOGPHOTO:any;
  _FACEBOOK:any;
  _WHATSAPP:any;
  _ITEMS:any = [];

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    localStorage.setItem('Title', 'Angular Lesson');
    localStorage.setItem('DogImage', 'assets/white-cat.jpeg');
    localStorage.setItem('Facebook', 'https://facebook.com/akibuis');
    localStorage.setItem('WhatsApp', 'https://whatsapp.com');
    this.GetAllDatas();
    this.GetNamesData();
  }

  GetAllDatas(){
    this._SITETITLE = localStorage.getItem('Title');
    this._DOGPHOTO = localStorage.getItem('DogImage');
    this._FACEBOOK = localStorage.getItem('Facebook');
    this._WHATSAPP = localStorage.getItem('WhatsApp');
  }

  GetNamesData(){
    this.http.get("https://reqres.in/api/users?page=1").subscribe(
      (res:any) => {
        this._ITEMS = res.data;
      },
      (err:any) => {
        console.log(err);
      }
    )
  }

}
