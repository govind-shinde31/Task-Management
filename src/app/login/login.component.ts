import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'task-management';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private taskService: TaskService) { }

  submitForm() {
    // Retrieve user credentials from local storage
    const storedUserString = localStorage.getItem('registeredUser');
    if (!storedUserString) {
      // alert('No registered user found. Please register first.');
      this.taskService.showSuccess('No registered user found. Please register first.', "Task Management")
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
      // alert('Login Successful!');
      this.taskService.showSuccess('Login Successful!', "Task Management")

      this.router.navigate(['starting-page']); // Change 'mainnav' to the appropriate route
    } else {
      // alert('Wrong credentials. Please try again.');
      this.taskService.showSuccess('Wrong credentials. Please try again.', "Task Management")
    }
  }

  navigateToRegister() {
    this.router.navigate(['register']);
  }
}
