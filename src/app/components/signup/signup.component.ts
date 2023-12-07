import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, private router: Router) { }
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name: [''],
      phone: [' '],
      email: [''],
      password: [''],
    })
  }
  signUp() {
    this._http.post<any>("http://localhost:3000/signup", this.signupForm.value).subscribe(res => {
      alert("signup successfully");
      this.signupForm.reset();
      this.router.navigate(['login'])
    }, err => {
      console.log(err)
      alert("something went wrong")
    })
  }
}
