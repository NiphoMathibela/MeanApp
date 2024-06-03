import { Component, inject } from '@angular/core';
import { FruitServiceService } from '../fruit/fruit-service.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruit-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fruit-display.component.html',
  styleUrl: './fruit-display.component.css'
})
export class FruitDisplayComponent {

  fruits:{_id:string, id:string, name:string, _v:string}[] = [];

  fruitservice: FruitServiceService = inject(FruitServiceService);

  constructor(){
    this.fruitservice.getfruit_service().then((fruits:{_id:string, id:string, name:string, _v:string}[]) => {
      this.fruits = fruits
    });
  }

  async fetchData() {
    this.fruits = await this.fruitservice.getfruit_service();
  }

  ondelete(fruitId: string) {
    this.fruitservice.deletefruit_service(fruitId)
      .then(deletedFruit => {
        // Handle success scenario (optional)
        alert(`Item deleted successfully ${fruitId}`)
        if (deletedFruit) {
          // this.fruits = this.fruits.filter(f => f._id !== deletedFruit._id);
          this.fetchData()
        }
      })
      .catch(error => {
        // Handle error scenario (optional)
        console.error("Error deleting fruit:", error);
        // You can display an error message to the user here
      });
  }

  private fruitsubscription!: Subscription;

}
