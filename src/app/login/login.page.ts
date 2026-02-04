import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  loginForm! : FormGroup ;

  constructor(private fb: FormBuilder, private router : Router) {

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  login() {
      if(this.loginForm.valid){
        const { username, password } = this.loginForm.value;

        sessionStorage.setItem('fromLogin','true');

        this.router.navigate(['/home'],{
          queryParams : { username, password }
        })
      }
      else{
        this.loginForm.markAllAsTouched();
      }
    }

  isInvalid(field : string) {
    const control = this.loginForm.get(field);
    return control?.invalid && ( control?.touched || control?.dirty )
  }

}
