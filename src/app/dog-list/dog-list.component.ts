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
  dogStyle(dog){
    return {'collection-item':true, 'blue': !dog.leash}
  }
 
  doBark(name:string){
    console.log(`${name} has barked`);
  }
  changeDog1(name){
    this.dog1.name  = name;
  }

 dogs: any[] =[
    {name:'Jimmy Blue', color: 'blue',  leash: true},
    {name:'Kelly', color: 'yellow',  leash: false},
    {name: 'Michael', color: 'red',  leash: true},
    {name:'Timmy', color: 'goldenrod',  leash: false},
  ]
  ngOnInit(): void {
  }

}