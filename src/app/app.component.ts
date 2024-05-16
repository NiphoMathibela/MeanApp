import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CreateFruitComponent } from "./create-fruit/create-fruit.component";
import { FruitDisplayComponent } from "./fruit-display/fruit-display.component";
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor.interceptor';
import { AppRoutingModule } from './app-routing/app-routing.module';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CreateFruitComponent, FruitDisplayComponent, ReactiveFormsModule, FormsModule, AppRoutingModule, RouterModule],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true}],
})
export class AppComponent {
  title = 'front-end';
}
