import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-children',
  imports: [FormsModule],
  templateUrl: './children.component.html',
  styleUrl: './children.component.css'
})
export class ChildrenComponent {
@Input() fromparentmsg: string = '';
  @Output() sendchildmsg = new EventEmitter<string>();
  
  childInput: string = '';

  sendtoParent() {
    this.sendchildmsg.emit(this.childInput);
  }
}
