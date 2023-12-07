import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  paymentForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.paymentForm = this.formBuilder.group({
      ownername: [''],
      password: [''],
      card_number: [''],
      date: [''],
      years: ['']
    })
  }
  payment() {
    this._http.post<any>("http://localhost:3000/payment" + this.route.snapshot.paramMap.get('id'), this.paymentForm.value).subscribe(res => {
      alert("Payment recieved");
      this.paymentForm.reset();
    })
    this.router.navigate(['ticket', this.route.snapshot.paramMap.get('id')]);
  }
}
