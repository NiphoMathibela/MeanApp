import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { FruitServiceService } from '../fruit/fruit-service.service';

@Component({
  selector: 'app-create-fruit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-fruit.component.html',
  styleUrls: ['./create-fruit.component.css']
})
export class CreateFruitComponent {
  fruitForm = new FormGroup({
    id: new FormControl(''),
    fruitName: new FormControl('')
  });

  constructor(public fruitservice: FruitServiceService) { }

  addFruit() {

    const fruitId = this.fruitForm.value.id ?? "";
    const fruitName = this.fruitForm.value.fruitName ?? "";

    if (this.fruitForm.invalid) {
      alert("Invalid")
      return
    }
    alert(this.fruitForm.value.fruitName + ":" + this.fruitForm.value.id)

    //Posts to DB
    this.fruitservice.addfruit_service(fruitId, fruitName)
    this.fruitForm.reset()
  }
}