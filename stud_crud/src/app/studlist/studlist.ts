import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Studservice } from '../service/studservice';
import { Studform } from "../studform/studform";


declare var bootstrap: any;

@Component({
  selector: 'app-studlist',
  imports: [ReactiveFormsModule, CommonModule, Studform],
  templateUrl: './studlist.html',
  styleUrl: './studlist.css'
})
export class Studlist {
students: any[] = [];
  editingStudent: any = null;

  constructor(private studentService: Studservice) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.studentService.getStudents().subscribe((data) => (this.students = data));
  }
openAdd(): void {
  this.editingStudent = null;
  this.showModal();
}

openEdit(student: any): void {
  this.editingStudent = student;
  this.showModal();
}

showModal(): void {
  const modalEl = document.getElementById('studentModal');
  if (modalEl) {
    const modal = new (window as any).bootstrap.Modal(modalEl);
    modal.show();
  }
}

closeModal(): void {
  const modalEl = document.getElementById('studentModal');
  if (modalEl) {
    const modal = (window as any).bootstrap.Modal.getInstance(modalEl);
    modal.hide();
  }
}

  onFormSubmit(refresh: boolean): void {
    if (refresh) 
      {console.log("refreshing list...")
        this.loadStudents();}
    this.editingStudent = null;
    this.loadStudents();
    // Close modal programmatically
    this.closeModal();
  }

  deleteStudent(id: string): void {
    if (confirm('Are you sure you want to delete this student?')) {
      this.studentService.deleteStudent(id).subscribe(() => this.loadStudents());
    }
  }
}
