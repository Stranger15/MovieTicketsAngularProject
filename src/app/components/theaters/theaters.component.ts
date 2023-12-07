import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.css']
})
export class TheatersComponent implements OnInit {
  enterTheater = "PVR";
  theatreName: string = '';
  theatreNamesObject: string[] = [];
  movie : any;
  constructor() { }

  ngOnInit(): void {
    let localMovie:any=localStorage.getItem('movie');
    this.movie=JSON.parse(localMovie);
    // console.log({movie:this.movie})
    this.intialiseTheatreNameObject();
  }

  intialiseTheatreNameObject() {
    this.theatreNamesObject.push('Ceniworld Cardiff', 'VU2 Cardiff', 'Odeon Cardiff', 'Everyman Cardiff', 'Premiere Cinema Cardiff')
  }

  setTheatreName(value: string = '') {
    this.theatreName = value;
  }

  transerData(value?: any) {
    this.theatreName = value;
  }

}
