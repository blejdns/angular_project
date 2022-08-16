import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  img_path = 'assets/img/'

  ads = [
    {title: 'Ads 1', content: this.img_path + 'ad1.jpg'},
    {title: 'Ads 2', content: this.img_path + 'ad2.jpg'},
    {title: 'Ads 3', content: this.img_path + 'ad3.jpg'},
    {title: 'Ads 4', content: this.img_path + 'ad4.jpg'},
  ];

  activeTab = 0;

  constructor() { }

  tabChanged(tabChangeEvent: MatTabChangeEvent){
    this.activeTab = tabChangeEvent.index;
  }

  changeAdLeft() {
    if (this.activeTab - 1 < 0){
      this.activeTab = this.ads.length - 1;
    } else {
      this.activeTab -= 1;
    }
  }

  changeAdRight() {
    if (this.activeTab + 1 > this.ads.length - 1){
      this.activeTab = 0;
    } else {
      this.activeTab += 1;
    }
  }

}
