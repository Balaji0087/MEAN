import { Component, ViewEncapsulation } from '@angular/core';
import { ChldcmponentComponent } from '../chldcmponent/chldcmponent.component';

@Component({
  selector: 'app-none',
  imports: [ChldcmponentComponent],
  templateUrl: './none.component.html',
  styleUrl: './none.component.css',
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent {

}
