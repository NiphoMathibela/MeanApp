import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private token: string | null = null; // Initialize token as null

  constructor(private http: HttpClient) { }

  signup(username: string, password: string): Observable<any> {
    return this.http.post('http://localhost:3000/users/signup', { username, password });
  }

  login(username: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>('http://localhost:3000/users/login', { username, password });
  }

  getToken(): string | null {
    return this.token;
  }

  //New Login service
  login2(username: string, password: string) {

    const headers = new HttpHeaders({

      'Content-Type': 'application/json'

    });


    const body = { username, password };


    return this.http.post('http://localhost:3000/users/login', body, { headers })

      .toPromise()

      .then((response: any) => {

        // Handle the response (e.g., store the token)

        localStorage.setItem('token', response.token);
        
        console.log("Token: ", response.token)

        return response.token;

      })

      .catch((error: any) => {

        console.error(error);

        return null;

      });

  }

}
