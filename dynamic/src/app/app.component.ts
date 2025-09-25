import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormArray, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule,ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  form: any;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      items: this.fb.array([
        this.fb.group({
          name: '',
          age: null,
        }),
      ]),
    });
  }

  get items() {
    return this.form.get('items') as FormArray;
  }

  deleteItem(index: number) {
    this.items.removeAt(index);
  }

  addItem() {
    this.items.push(
      this.fb.group({
        name: [''],
        age: [''],
      })
    );
  }

  submit() {
    console.log(this.form.value);
  }
}
