import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Input } from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input() parentData!: string;

  seatNumberData: any[] = [];

  selectedSeats: number[] = [];
  theatreForm!: FormGroup;
  movie: any;
  startDate:Date;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    let localMovie: any = localStorage.getItem('movie');
    this.movie = JSON.parse(localMovie);
    console.log({ movie: this.movie });
    this.startDate=new Date();
    this.initialiseSeatNumbers();
    this.theatreForm = this.formBuilder.group({
      tmovie: [''],
      tname: [''],
      tdate: [''],
      ttime: [''],
      seat: ['']
    })

  }

  initialiseSeatNumbers() {
    for (var i = 1; i < 121; i++) {
      this.seatNumberData?.push(
        { selected: false, booked: false, seatNumber: "" + i });
    }
  }

  setSeatNumbers(seat: any) {
    seat.selected = !seat.selected;
    if (!this.selectedSeats.includes(seat.seatNumber)) {
      this.selectedSeats.push(seat.seatNumber);
    } else {
      this.selectedSeats.splice(this.selectedSeats.indexOf(seat.seatNumber), 1);
    }
    console.log({ selectedSeatNumbers: this.selectedSeats })
    for (let seat of this.seatNumberData) {
      if (seat.selected) {
        console.log({ selectedSeat: seat })
      }
    }
  }

  confirm() {
    this.theatreForm.patchValue({ tname: this.parentData });
    this.theatreForm.patchValue({ seat: this.selectedSeats?.toString() });
    this._http.post<any>("http://localhost:3000/theater", this.theatreForm.value).subscribe(res => {
      this.theatreForm.reset();
      this.router.navigate(['payment', res.id]);
      // this.router.navigate(['ticket', res.id])
    })
  }

}
