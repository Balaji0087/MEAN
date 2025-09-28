import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Studlist } from "./studlist/studlist";

@Component({
  selector: 'app-root',
  imports: [Studlist],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('stud_crud');
}
