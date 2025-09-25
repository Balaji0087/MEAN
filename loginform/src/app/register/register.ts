import { Component } from '@angular/core';
import { Auth } from '../sevices/auth';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
 registerForm: FormGroup;
  message = '';

  constructor(private fb: FormBuilder, private authService: Auth,private router:Router)  {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.pattern(
            '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
          )]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  register() {
    if (this.registerForm.invalid) {
      this.message = "Please fill all required fields correctly!";
      return;
    }

    this.authService.register(this.registerForm.value).subscribe({
      next: (res: any) => {this.message = res.message
        if (res.message === "User registered successfully") {
            this.registerForm.reset();
            this.router.navigate(['/login']);
          }
      },
      error: err => this.message = err.error.message
    });
  }
}
