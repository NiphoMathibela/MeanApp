import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../auth-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 

  username: string = '';
  password: string = '';
  errorMessage: string = ''; // Optional for displaying errors

  constructor(public authservice: AuthServiceService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    // Login logic
    if (this.username && this.password) {
      // Call AuthService login method (if applicable)
      if (this.authservice) {
        this.authservice.login(this.username, this.password)
          .subscribe(
            (response) => {
              // Handle successful login (e.g., store token, redirect)
              console.log("Login successful:", response);
              this.router.navigate(['/']);
            },
            (error) => {
              // Handle login error
              console.error("Login error:", error);
              this.errorMessage = "Invalid username or password"; // Example error message
            }
          );
        return;
      }

      // Simulate login for demo (replace with actual login logic)
      console.log("Username:", this.username, "Password:", this.password);
      this.router.navigate(['/home']); // Example redirect
    } else {
      this.errorMessage = "Please enter your username and password";
    }
  }

  onLogin() {

    this.authservice.login2(this.username, this.password)

     .then((token: string) => {

        if (token) {

          console.log('Login successful!');

          // navigate to a different route
          this.router.navigate(['/home']);

        } else {

          console.log('Login failed!');

        }

      })

     .catch((error: any) => {

        console.error('Error logging in:', error);

      });

  }
}
