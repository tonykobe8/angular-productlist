import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule} from './app-routing.module';

import { RouterModule, Routes } from '@angular/router';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports:      [ AppRoutingModule,RouterModule,BrowserModule,FormsModule ],
  declarations: [ AppComponent, HelloComponent, LoginComponent, RegisterComponent, ProductsListComponent, ProductsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
