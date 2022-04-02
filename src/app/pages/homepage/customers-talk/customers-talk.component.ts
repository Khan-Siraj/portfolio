import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers-talk',
  templateUrl: './customers-talk.component.html',
  styleUrls: ['./customers-talk.component.scss']
})
export class CustomersTalkComponent implements OnInit {

  customers:any[] = [
    {
      name:'Tom',
      comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rem odio numquam, asperiores at magnam eos vel nulla voluptatum facere ex eius cum fugiat eaque temporibus! Nam aliquam in vitae.',
      img:'assets/images/customers/user-1.png'
    },
    {
      name:'Tom',
      comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rem odio numquam, asperiores at magnam eos vel nulla voluptatum facere ex eius cum fugiat eaque temporibus! Nam aliquam in vitae.',
      img:'assets/images/customers/user-1.png'
    },
    {
      name:'Tom',
      comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rem odio numquam, asperiores at magnam eos vel nulla voluptatum facere ex eius cum fugiat eaque temporibus! Nam aliquam in vitae.',
      img:'assets/images/customers/user-1.png'
    },
    {
      name:'Tom',
      comment:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, rem odio numquam, asperiores at magnam eos vel nulla voluptatum facere ex eius cum fugiat eaque temporibus! Nam aliquam in vitae.',
      img:'assets/images/customers/user-1.png'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
