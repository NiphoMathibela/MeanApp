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
        const authToken = this.authService.getToken();

        if (authToken) {
            const authReq = request.clone({
                headers: new HttpHeaders({ Authorization: `Bearer ${authToken}` })
            });
            return next.handle(authReq);
        }

        return next.handle(request);
    }
}
