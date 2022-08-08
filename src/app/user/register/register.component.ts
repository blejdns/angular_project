import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, IRegisterStatus } from '../../auth.service';
import { PasswordValidators } from './password.validators';

export interface IUserData {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  address: [
    country: string,
    city: string
  ];
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerError: IRegisterStatus | undefined;

  registerForm = this.fb.group({
    username: ['', Validators.required],
    firstName: ['',Validators.required],
    lastName: ['',Validators.required],
    email: ['', {validators: [Validators.required, Validators.email]}],
    address: this.fb.group({
      country: [''],
      city: ['']
    }),
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, { validators: [PasswordValidators.checkConfirmPassword] }
  );

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  onSubmit(){
    var user: IUserData | any;
    user = this.registerForm.value;
    let status: IRegisterStatus | undefined =  this.authService.register(user);
    if (status?.success){
      this.router.navigate(['']);
    } else {
      this.registerError = status;
    }
  }

  get username() {
    return this.registerForm.get('username');
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }


}
