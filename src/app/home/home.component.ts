import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemsCount = 0 ;
  goals = [] ;
  btnText = 'Add an item' ;
  goalText = 'what is your life goal';
  constructor() { }

  ngOnInit() {
    this.itemsCount = this.goals.length ;
  }
  addItem() {
    this.goals.push(this.goalText) ;
    this.itemsCount = this.goals.length;
    this.goalText = '';
  }

}
