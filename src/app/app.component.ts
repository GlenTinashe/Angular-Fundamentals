import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular fundamentals';
  catGif='https://i.pinimg.com/originals/c3/2b/fa/c32bfa16bcf864e478d3ddfe32440268.gif';
  catGifAlt='Cat gif alternative text';
  dog1={name:'Harry', color:'brown'}
  dog2={name:'Barry', color:'white'}
}
