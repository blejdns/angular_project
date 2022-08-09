import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnChanges {

  isUserLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isUserLoggedIn = this.authService.loginStatus();
  }

  ngOnChanges(changes: SimpleChanges): void {
      
  }

  logout(){
    this.authService.logout();
    this.router.navigate([''])
      .then(()=> {
        window.location.reload();
      });
  }

}
