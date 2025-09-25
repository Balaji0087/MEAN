import { Component, ViewEncapsulation } from '@angular/core';
import { ChldcmponentComponent } from '../chldcmponent/chldcmponent.component';

@Component({
  selector: 'app-shadowdom',
  imports: [ChldcmponentComponent],
  templateUrl: './shadowdom.component.html',
  styleUrl: './shadowdom.component.css',
  encapsulation: ViewEncapsulation.ShadowDom // This line enables Shadow DOM encapsulation
})
export class ShadowdomComponent {

}
