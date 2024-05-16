import { NgModule } from '@angular/core';
import { AppRoutingRoutingModule } from './app-routing-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../auth/login/login/login.component';
import { FruitDisplayComponent } from '../fruit-display/fruit-display.component';
import { CreateFruitComponent } from '../create-fruit/create-fruit.component';


const routes: Routes = [
  { path: '', component: FruitDisplayComponent }, // Default route
  { path: 'add', component: CreateFruitComponent }, // Route for adding fruit
  { path: 'login', component: LoginComponent }, // Route for login
  // { path: 'signup', component: SignupComponent }, // Route for signup (assuming SignupComponent exists)
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for 404 handling
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }