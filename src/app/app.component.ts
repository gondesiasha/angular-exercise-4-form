import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Exercise4';
  data:any={};
  onSubmit(){
    alert(JSON.stringify(this.data))
  }
  



  
  }
  



