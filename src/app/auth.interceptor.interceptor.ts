import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpHeaders,
} from '@angular/common/http';
import { AuthServiceService } from './auth/auth-service.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor(private authService: AuthServiceService) {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // const authToken = this.authService.getToken();

        const authToken = localStorage.getItem('token');

        console.log(authToken)

        if (authToken) {
            const authReq = request.clone({
                headers: new HttpHeaders({ Authorization: `Bearer ${authToken}` })

                // setHeaders: {

                //     Authorization: `Bearer ${this.authService.getToken()}`
          
                //   }
            });


            const authReq2 = request.clone({

                headers: new HttpHeaders({
              
                  Authorization: `Bearer ${localStorage.getItem('token')}`,
              
                  // Other headers, if present
              
                  'Content-Type': 'application/json',
              
                  Accept: 'application/json'
              
                }),
              
                // Other properties, if present
              
                body: request.body,
              
                params: request.params,
              
              });


            return next.handle(authReq2);
        }

        return next.handle(request);
    }
}
