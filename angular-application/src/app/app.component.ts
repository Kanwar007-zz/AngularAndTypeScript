import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Application';
  post = {
    title: "Title",
    isFavorite : true
  }
  onChangeValue(){
    console.log("change event Value ");
  }
}
