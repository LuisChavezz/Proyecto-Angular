import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
declare var $:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchoToSlider: number;

  constructor() { }

  ngOnInit(): void {
    
  }
  cargarSlider(){
    this.anchoToSlider = this.widthSlider;
  }

  resetSlider(){
    this.anchoToSlider = null;
  }
}
