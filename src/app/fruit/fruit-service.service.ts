import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Injectable({
  providedIn: 'root'
})
export class FruitServiceService {

  constructor(private http: HttpClient) { }

  addfruit_service(pid: string, pnname: string){
    this.http.post('http://localhost:3000/product/',{id:pid, name:pnname})
    .subscribe(response => {console.log(response)})
  }
}
