import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateFruitComponent } from "./create-fruit/create-fruit.component";
import { FruitDisplayComponent } from "./fruit-display/fruit-display.component";
import { FormControl, FormGroup, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CreateFruitComponent, FruitDisplayComponent, ReactiveFormsModule, FormsModule]
})
export class AppComponent {
  title = 'front-end';
}
