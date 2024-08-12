import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'task-management';
  email: string = '';
  password: string = '';

  constructor(private router: Router) { }

  submitForm() {
    // Retrieve user credentials from local storage
    const storedUserString = localStorage.getItem('registeredUser');
    if (!storedUserString) {
      alert('No registered user found. Please register first.');
      return;
    }

    const storedUser = JSON.parse(storedUserString);
    const storedEmail = storedUser.email;
    const storedPassword = storedUser.password;

    // Log retrieved email and password
    console.log('Stored Email:', storedEmail);
    console.log('Stored Password:', storedPassword);

    // Check if entered credentials match stored credentials
    if (this.email === storedEmail && this.password === storedPassword) {
      alert('Login Successful!');
      this.router.navigate(['starting-page']); // Change 'mainnav' to the appropriate route
    } else {
      alert('Wrong credentials. Please try again.');
    }
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
