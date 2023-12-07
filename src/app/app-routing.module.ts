import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SignupComponent } from './components/signup/signup.component';
import { MovieDetailsComponent } from './components/theaters/movie-details/movie-details.component';
import { TheatersComponent } from './components/theaters/theaters.component';
import { TicketComponent } from './components/ticket/ticket.component';


const routes: Routes = [
  {
    path: "", component: HomepageComponent
  },
  {
    path: "homepage", component: HomepageComponent
  }, {
    path: "login", component: LoginComponent
  },
  {
    path: "contact-us", component: ContactUsComponent
  },
  {
    path: "signup", component: SignupComponent
  },
  {
    path: "navbar", component: NavbarComponent
  },
  {
    path: "movies", component: MoviesComponent
  },
  {
    path: "payment/:id", component: PaymentComponent
  }, {
    path: "theaters", component: TheatersComponent
  },
  {
    path: "movie-details", component: MovieDetailsComponent
  },
  {
    path: "ticket/:id", component: TicketComponent
  },
  {
    path: "**", component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
