import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/auth/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private authService: AuthService, private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  })

  loginFormSubmit(): void {
    if (this.loginForm.invalid) return;
    const { email, password } = this.loginForm.value;
    this.authService.login(email!, password!).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        this.router.navigate(['/dashboard']);  // Add this line to navigate after success
      },
      error: (err) => console.error('Login failed:', err)
    });
  }
}
