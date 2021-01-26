import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dog-list',
  templateUrl: './dog-list.component.html',
  styleUrls: ['./dog-list.component.css']
})
export class DogListComponent implements OnInit {

  constructor() { }
  
  catGif='https://i.pinimg.com/originals/c3/2b/fa/c32bfa16bcf864e478d3ddfe32440268.gif';
  catGifAlt='Cat gif alternative text';
  dog1={name:'Harry', color:'brown'}
  dog2={name:'Barry', color:'white'}
 
  doBark(name:string){
    console.log(`${name} has barked`);
  }
  changeDog1(name){
    this.dog1.name  = name;
  }
  ngOnInit(): void {
  }

}
