import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import { ManageProductsComponent } from './manage-products/manage-products.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './user/login/login.component';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './user/register/register.component';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductsComponent } from './products/products.component';
import {MatSidenavModule} from '@angular/material/sidenav';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'products', component: ProductsComponent},
  { path: 'my-orders', component: OrdersComponent},
  { path: 'manage-orders', component: ManageOrdersComponent},
  { path: 'manage-products', component: ManageProductsComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdersComponent,
    ManageOrdersComponent,
    ManageProductsComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [RouterModule.forRoot(routes)],
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatSidenavModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
