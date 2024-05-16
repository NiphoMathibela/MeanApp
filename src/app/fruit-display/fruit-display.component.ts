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

  ondelete(fruitId: string) {
    this.fruitservice.deletefruit_service(fruitId)
      .then(deletedFruit => {
        // Handle success scenario (optional)
        if (deletedFruit) {
          // Remove the deleted fruit from the local fruit array (if applicable)
          this.fruits = this.fruits.filter(f => f._id !== deletedFruit._id);
        }
      })
      .catch(error => {
        // Handle error scenario (optional)
        console.error("Error deleting fruit:", error);
        // You can display an error message to the user here
      });
  }

  private fruitsubscription!: Subscription;

  // ngOnInit() {
  //   this.fruitservice.getfruit_service();

  //   this.fruitsubscription = this.fruitservice.getUpdateListener()
  //   .subscribe((fruits:{_id:string, id: string, name: string, _v: string} [])=>{
  //     this. fruits = fruits;
  //   })
  // }
  

  // ngOnDestroy(){
  //   this.fruitsubscription.unsubscribe();
  // }
}
