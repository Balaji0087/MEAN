import { Component } from '@angular/core';
import { Auth } from '../sevices/auth';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
 loginForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, private authService: Auth,private router:Router)  {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  login() {
    if (this.loginForm.invalid) {
      this.message = "Please fill all required fields correctly!";
      return;
    }

    this.authService.login(this.loginForm.value).subscribe({
      next: (res: any) => {this.message = res.message
        if (res.message === "Login successful") {
          this.router.navigate(['/success']);
        }
      },
      error: err => this.message = err.error.message
    });
  }
}
