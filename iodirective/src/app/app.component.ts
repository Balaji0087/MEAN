import { Component, Input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildrenComponent } from "./children/children.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildrenComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
   messagetochild = '';
  childmsg = '';
  msg='';
  sendtoChild() {
    this.messagetochild=this.msg; 
  }
  onChildResponse(data: string) {
    this.childmsg = data;
  }
}
