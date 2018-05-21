import { Component, OnInit,NgModule } from '@angular/core';
import {Hero} from '../entity/hero';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

  constructor() { }

  //#region  属性
  powers=['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  model:Hero=new Hero(18,'Dr IQ',this.powers[0], 'Chuck Overstreet');
  submitted=false;
  //#endregion

  onSubmit(){
    this.submitted=true;
  }

  ngOnInit() {
  }

   get diagnostic(){
     return JSON.stringify(this.model);
   }
}
