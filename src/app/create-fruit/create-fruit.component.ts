import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FruitServiceService } from '../fruit/fruit-service.service';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from "../error/error/error.component";

@Component({
    selector: 'app-create-fruit',
    standalone: true,
    templateUrl: './create-fruit.component.html',
    styleUrls: ['./create-fruit.component.css'],
    imports: [ReactiveFormsModule, CommonModule, ErrorComponent]
})
export class CreateFruitComponent {
  fruitForm = new FormGroup({
    id: new FormControl(''),
    fruitName: new FormControl('')
  });

  errorMessage: string = "";

  constructor(public fruitservice: FruitServiceService) { }

  addFruit() {

    const fruitId = this.fruitForm.value.id ?? "";
    const fruitName = this.fruitForm.value.fruitName ?? "";

    if (this.fruitForm.invalid) {
      this.errorMessage = "Please enter a valid fruit name & ID."
      return
    }
    alert(this.fruitForm.value.fruitName + ":" + this.fruitForm.value.id)

    //Posts to DB
    this.fruitservice.addfruit_service(fruitId, fruitName)
    this.fruitForm.reset()
  }
}