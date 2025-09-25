import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ColorPickerModule from 'ngx-color-picker';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ColorPickerModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'colorpicker';
  color = '#ff0000';
}
