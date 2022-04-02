import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus:any[] = [
    {
      label:'Home',
      url:'/home'
    }, 
    {
      label:'Collections',
      url:'/collections'
    },
    {
      label:'Services',
      url:'/services'
    },
    {
      label:'About',
      url:'/about-us'
    },
    {
      label:'Contact',
      url:'/contact-us'
    }
  ];
  toggle:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  menuToggle():void{
    this.toggle = !this.toggle;
  }

}
