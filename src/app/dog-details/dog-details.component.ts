import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  constructor() { }
  @Input() name:string;
  @Input() color:string;

  @Output() bark = new EventEmitter<{}>()
  @Output() nameChange = new EventEmitter<string>()
  @Output() colorChange = new EventEmitter<string>()


  colorStyles={
    color: this.goTeal(),
    fontSize: '2em'
  }
   goTeal(){
     return "teal"
   }
  handleClick(){
    this.bark.emit({})
  }

  handleNameChange(e){
    console.log(e.target.value);
    this.nameChange.emit(e.target.value);
  }

  handleColorChange(e){
    this.colorChange.emit(e.target.value)
  }
  ngOnInit(): void {
  }

}
