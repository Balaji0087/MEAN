import { Component, ViewEncapsulation } from '@angular/core';
import { ChldcmponentComponent } from '../chldcmponent/chldcmponent.component';
@Component({
  selector: 'app-emulated',
  imports: [ChldcmponentComponent],
  templateUrl: './emulated.component.html',
  styleUrl: './emulated.component.css',
  encapsulation: ViewEncapsulation.Emulated // This line is optional, as emulation is the default mode
})
export class EmulatedComponent {

}
