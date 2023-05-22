import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './reusables/header/header.component';
import { FooterComponent } from './reusables/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutusComponent,
    ContactusComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
