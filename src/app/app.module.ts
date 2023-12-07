import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { MoviesComponent } from './components/movies/movies.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TheatersComponent } from './components/theaters/theaters.component';
import { PaymentComponent } from './components/payment/payment.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MovieDetailsComponent } from './components/theaters/movie-details/movie-details.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MoviesComponent,
    LoginComponent,
    SignupComponent,
    TheatersComponent,
    PaymentComponent,
    NavbarComponent,
    ContactUsComponent,
    MovieDetailsComponent,
    TicketComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
