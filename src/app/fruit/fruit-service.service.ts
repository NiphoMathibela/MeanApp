import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = localStorage.getItem('token');

    console.log("Token: ", token)

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  
    this.http.post<{message:string, fruit:any}>('http://localhost:3000/product/', {id:pid, name:pnname}, { headers: headers })
      .subscribe((thefruit) => {
        this.fruitsdisplay.push(thefruit.fruit);
        this.updatedfruitdisplay.next([...this.fruitsdisplay]);
      })
  }

  async getfruit_service() : Promise<{_id:string, id:string, name:string, _v:string}[]>
  {
    const data = await fetch(this.url)
    return await data.json() ?? [];
  }

  async deletefruit_service(fruitid: string) : Promise<{_id:string, id:string, name:string, _v:string} | undefined> {
    const headers = new HttpHeaders({

      Authorization: `Bearer ${localStorage.getItem('token')}`,

      'Content-Type': 'application/json'

    });

    return this.http.delete(`${this.url}/${fruitid}`, { headers: headers })

      .toPromise()

      .then((response: any) => {

        return response;

      })

      .catch((error: any) => {

        console.error(error);

        return undefined;

      });
  }
}

function getUpdateListener() {
  throw new Error('Function not implemented.');
}

