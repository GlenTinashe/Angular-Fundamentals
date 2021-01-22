import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dog-details',
  templateUrl: './dog-details.component.html',
  styleUrls: ['./dog-details.component.css']
})
export class DogDetailsComponent implements OnInit {

  constructor() { }
  @Input() name:string;
  @Input() color:string;
  ngOnInit(): void {
  }

}
