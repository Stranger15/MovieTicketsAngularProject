import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactusForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.contactusForm = this.formBuilder.group({
      fullname: [''],
      email: [''],
      msg: [''],
    })
  }
  contactUs() {
    this._http.post<any>("http://localhost:3000/contactus", this.contactusForm.value).subscribe(res => {
      this.contactusForm.reset();
      this.router.navigate(['login'])
    }, err => {
      alert("somethingwent wrong")
    })
  }
}
