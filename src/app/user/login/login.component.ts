import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ILoginStatus } from '../../auth.service';
import { PasswordValidators } from '../register/password.validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginError: ILoginStatus | undefined;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  })

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  onSubmit(){
    let status: ILoginStatus =  this.authService.login(this.username?.value, this.password?.value);
    if (status.success){
      this.router.navigate([''])
      .then(()=> {
        window.location.reload();
      });
    } else {
      this.loginError = status;
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
