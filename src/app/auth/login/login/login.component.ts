import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from "../../../error/error/error.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
    imports: [FormsModule, ErrorComponent, CommonModule]
})
export class LoginComponent {

 

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(public authservice: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    if(this.username && this.password){
      this.authservice.login2(this.username, this.password)
      .then((token: string) => {
        if (token) {
          console.log('Login successful!');
          // navigate to a different route
          this.router.navigate(['/home']);
        } else {
          console.log('Login failed!');
          this.authservice.signup(this.username, this.password)
            .subscribe((response: any) => {
              console.log('Sign up successful!');
              // navigate to a different route
              this.router.navigate(['/home']);
            }),
            (error: any) => {

              console.error('Error signing up:', error);
              this.errorMessage = "Invalid login";
  
            }
        }
      })
      .catch((error: any) => {
        console.error('Error logging in:', error);
      });
    }else{
      this.errorMessage = "Enter valid login details."
    }
  }

  // onLogin() {

  //   this.authservice.login2(this.username, this.password)

  //    .then((token: string) => {

  //       if (token) {

  //         console.log('Login successful!');

  //         // navigate to a different route
  //         this.router.navigate(['/home']);

  //       } else {

  //         // console.log('Login failed!');
  //         this.authservice.signup(this.username, this.password);

  //       }

  //     })

  //    .catch((error: any) => {

  //       console.error('Error logging in:', error);

  //     });

  // }
}
