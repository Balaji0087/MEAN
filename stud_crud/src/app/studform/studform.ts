import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Studservice } from '../service/studservice';

@Component({
  selector: 'app-studform',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './studform.html',
  styleUrl: './studform.css'
})
export class Studform {
 @Input() student: any = null;
  @Output() formSubmit = new EventEmitter<boolean>();

  studentForm: FormGroup;
  submitted = false;

  courses: string[] = ['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Biology'];

  constructor(private fb: FormBuilder, private studentService: Studservice) {
    this.studentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      course: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18), Validators.max(60)]],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['student'] && this.student) {
      this.studentForm.patchValue(this.student);
    } else {
      this.studentForm.reset();
    }
  }

  get f() {
    return this.studentForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.studentForm.invalid) return;

    if (this.student?._id) {
      this.studentService.updateStudent(this.student._id, this.studentForm.value).subscribe(() => {
        this.formSubmit.emit(true);
      });
    } else {
      this.studentService.addStudent(this.studentForm.value).subscribe(() => {
        this.formSubmit.emit(true);
      });
    }
  }
}
