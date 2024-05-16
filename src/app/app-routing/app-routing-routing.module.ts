import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login/login.component';
import { FruitDisplayComponent } from '../fruit-display/fruit-display.component';
import { CreateFruitComponent } from '../create-fruit/create-fruit.component';
import { AppComponent } from '../app.component';

const routes: Routes = [
  { path: '', component: FruitDisplayComponent }, // Default route
  { path: 'add', component: CreateFruitComponent }, // Route for adding fruit
  { path: 'login', component: LoginComponent }, // Route for login
  // { path: 'signup', component: SignupComponent }, // Route for signup (assuming SignupComponent exists)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingRoutingModule { }
