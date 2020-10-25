import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsComponent } from './products/products.component';



const appRoutes:Routes = [
  {path:'products-list' , component:ProductsListComponent},
  {path:'products' ,component:ProductsComponent},
{ path:'register', component:RegisterComponent}
]


@NgModule({
   imports:[  CommonModule,RouterModule.forRoot(appRoutes)],
  declarations: []
})
export class AppRoutingModule { }