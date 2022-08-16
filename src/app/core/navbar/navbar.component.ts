import { AfterViewChecked, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, ILoginStatus } from '../../user/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  @ViewChild("menu") block!: ElementRef;

  loginError: ILoginStatus | undefined;

  loginForm = this.fb.group({
    username: [''],
    password: [''],
  })

  menuX = 0;
  menuY = 0;

  menuOpened = false;
  goLogin = false;
  isUserLoggedIn = false;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.loginStatus();
  }

  menuOpen(){
    if (!this.menuOpened) {
      let datas = this.block.nativeElement.getBoundingClientRect();
      this.menuX = -100;
      this.menuY = datas.y - 10;
    }
    this.menuOpened = !this.menuOpened;
    this.goLogin = false;
  }

  enableLogin(){
    this.goLogin = true;
  }

  onSubmit(){
    this.authService.login(this.username?.value, this.password?.value)
    .subscribe( data => { 
      if (data.success){
        this.router.navigate([''])
        .then(()=> {
          window.location.reload();
        });
      } else {
        this.loginError = data;
      }
    });

  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }

  logout(){
    this.authService.logout();
    this.router.navigate([''])
      .then(()=> {
        window.location.reload();
      });
  }

}
