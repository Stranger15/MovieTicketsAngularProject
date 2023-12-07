import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Ticket } from 'src/app/Ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})

export class TicketComponent implements OnInit {

  ticketForm!: FormGroup;
  ticketInfo!: Ticket;

  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.ticket();
  }
  ticket() {
    this._http.get<any>("http://localhost:3000/theater/" + this.route.snapshot.paramMap.get('id')).subscribe(res => {
      this.ticketInfo = res;
    });

  }
}

