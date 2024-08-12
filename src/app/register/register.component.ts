import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: any = {};
  confirmPassword: string = '';

  constructor(private router: Router, private taskService: TaskService) { }

  submitForm() {
    if (this.user.password !== this.confirmPassword) {
      // alert('Passwords do not match.');
      this.taskService.showSuccess('Passwords do not match.', "Task Management")
      return;
    }

    // Store user data in local storage
    localStorage.setItem('registeredUser', JSON.stringify({ email: this.user.email, password: this.user.password }));

    // Log stored user data
    console.log('Stored User Data:', localStorage.getItem('registeredUser'));

    // Alert and redirect
    // alert('Registration Successful! User data stored locally.');
    this.taskService.showSuccess('Registration Successful! User data stored locally.', "Task Management")
    this.clearForm();
    this.navigateToLogin();
  }

  clearForm() {
    this.user = {};
    this.confirmPassword = '';
  }

  navigateToLogin() {
    this.router.navigate(['login']);
  }
}
