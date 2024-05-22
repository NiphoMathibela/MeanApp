import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred.';

        if (error.error) {
          // Extract message from error response
          errorMessage = error.error.message || errorMessage;
        }

        // Optionally handle error based on error code or type
        console.error('Error occurred:', error); // Log the error for debugging

        // Implement custom error notification (e.g., alert, toast)
        alert(errorMessage); // Simple alert for notification (replace with your preferred method)

        return throwError(errorMessage); // Return user-friendly error message
      })
    );
  }
}
