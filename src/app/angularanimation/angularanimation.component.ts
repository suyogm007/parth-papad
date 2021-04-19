import { Component, OnInit } from '@angular/core';
import { trigger, state,style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-angularanimation',
  animations: [
    trigger('openClose', [
      state('open', style({
        height:'200px',
        opacity:1,
        backgroundColor:'yellow'
      })),
      state('closed',style({
        height:'100px',
        opacity: 0.5,
        backgroundColor:'green'
      })),
      transition('open => closed', [
      animate('1s')
      ]),
      transition('closed => open', [
      animate('0.5s')
      ])
    ])
  ],
  templateUrl: './angularanimation.component.html',
  styleUrls: ['./angularanimation.component.css']
})
export class AngularanimationComponent implements OnInit {
     isOpen= true;
  constructor() { }

  ngOnInit(): void {
  }
    toggle() {
      this.isOpen=!this.isOpen;
    }
    
  }
