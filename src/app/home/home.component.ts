import { Component, OnInit } from '@angular/core';
import {trigger , stagger, query , animate , keyframes, style , transition} from '@angular/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('goals',[
      transition('* => *',[
        query(':enter',style({
          opacity: 0
        }),{optional:true}),

        query(':enter',stagger('300ms',[
          animate('.6s ease-in',keyframes([ 
            style({opacity:0, transform: 'translateY(-75%)',offset:0}),
            style({opacity:.5, transform: 'translateY(35px)',offset:.3}),
            style({opacity:1, transform: 'translateY(0)',offset:1})
          ]))]),{optional:true}),

          query(':leave',stagger('300ms',[
          animate('.6s ease-in',keyframes([ 
            style({opacity:1, transform: 'translateY(0)',offset:0}),
            style({opacity:.5, transform: 'translateY(35px)',offset:.3}),
            style({opacity:0, transform: 'translateY(-75%)',offset:1})
          ]))]),{optional:true})
      ])

    ])
  ]
})
export class HomeComponent implements OnInit {

  itemsCount = 0 ;
  goals = ["x" , "Y" , "z"] ;
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

  removeItem(i){
    this.goals.splice(i,1);
  }

}
