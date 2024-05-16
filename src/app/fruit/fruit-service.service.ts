import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class FruitServiceService {

  url = "http://localhost:3000/product"
  getUpdateListener() {
    throw new Error('Method not implemented.');
  }

  private fruitsdisplay: {_id:string, id:string, name:string, _v:string}[] = [];
  private updatedfruitdisplay = new Subject<{_id:string, id:string, name:string, _v:string}[]>();

  constructor(private http: HttpClient) { }

  addfruit_service(pid: string, pnname: string){
    this.http.post<{message:string, fruit:any}>('http://localhost:3000/product/',{id:pid, name:pnname})
    .subscribe((thefruit) => {
      this.fruitsdisplay.push(thefruit.fruit);
      this.updatedfruitdisplay.next([...this.fruitsdisplay]);
    })
  }

  // getfruit_service(): Observable<{message:string,fruits:any}> {
  //   this.http.get<{message:string,fruits:any}>('https://localhost:3000/product')
  //   .subscribe((thefruit)=>
  //   {

  //   this. fruitsdisplay = thefruit.fruits
  //   this.updatedfruitdisplay.next([ ... this.fruitsdisplay]);
  //   })
  //   }

  async getfruit_service() : Promise<{_id:string, id:string, name:string, _v:string}[]>
  {
    const data = await fetch(this.url)
    return await data.json() ?? [];
  }

  async deletefruit_service(fruitid: string) : Promise<{_id:string, id:string, name:string, _v:string} | undefined> {
    const data = await fetch(`${this.url}/${fruitid}`)
    return await data.json() ?? {}
  }
}

function getUpdateListener() {
  throw new Error('Function not implemented.');
}

