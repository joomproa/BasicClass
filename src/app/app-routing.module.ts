import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { MoviedetailsComponent } from './pages/moviedetails/moviedetails.component';

const routes: Routes = [
  { path: '', component:HomepageComponent },
  { path: 'home', component:HomepageComponent },
  { path: 'moviedetails/:id', component:MoviedetailsComponent },
  { path: 'about', component:AboutusComponent },
  { path: 'contact-us', component:ContactusComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
