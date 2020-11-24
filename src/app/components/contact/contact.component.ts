import { Component, OnInit, ViewChild } from '@angular/core';
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
  public autor: any;

  @ViewChild('texto', {static: true}) textos: any; //Selección del elemento HTML

  constructor() { }

  ngOnInit(): void {
    console.log(this.textos.nativeElement.textContent);
  }
  cargarSlider(){
    this.anchoToSlider = this.widthSlider;
  }

  resetSlider(){
    this.anchoToSlider = null;
  }

  getAutor(event){
    this.autor = event;
    console.log(this.autor);
  }
}
