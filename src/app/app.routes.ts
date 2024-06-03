import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login/login.component';
import { CreateFruitComponent } from './create-fruit/create-fruit.component';
import { FruitDisplayComponent } from './fruit-display/fruit-display.component';

export const routes: Routes = [
    { path: '', component: FruitDisplayComponent }, // Default route
    { path: 'add', component: CreateFruitComponent }, // Route for adding fruit
    { path: 'login', component: LoginComponent }, // Route for login
    { path: 'signup', component: LoginComponent }, // Route for signup (assuming SignupComponent exists)
    { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard route for 404 handling
  ];;
