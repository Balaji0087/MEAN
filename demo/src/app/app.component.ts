import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NoneComponent } from './none/none.component';
import { EmulatedComponent } from './emulated/emulated.component';
import { ShadowdomComponent } from './shadowdom/shadowdom.component';

@Component({
  selector: 'app-root',
  imports: [NoneComponent, EmulatedComponent,ShadowdomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo';
}
