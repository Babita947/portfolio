import { Component, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'model-driven-form';
  menu = [{id:'Home', icon: 'fa fa-home fa-3x'}, {id:'About', icon: 'fa fa-user fa-3x'}, {id:'Skills', icon: 'fa fa-book fa-3x'}, {id:'Contact', icon: 'fa fa-phone fa-3x'}];
  skills = ['Angular 9',
    'Javascript',
    'Typescript',
    'Bootstrap 3/4',
    'HTML',
    'CSS',
    'Git',
    'WebPack',
    'CSS Flexbox',
    'NgRx',
    'Agile/Scrum Methodology',
    'Teamwork andCollaboration',
  ];
  active:string = 'Home';
  about = 'Innovative and deadline-driven Web Developer with 2 years of experience in web-application development. Want to touch avenues with utmost sincerity and dedicated smart work for the growth of esteemed organization along with mine.Curious to learn and explore new technologies and standards.'
  constructor() {
  }

  navigateTo(to: string) {
    this.active = to;
    const elemnt = document.getElementById(to);
    elemnt?.scrollIntoView();
  }
}
