import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() ancho: number; //Propiedad que recoje al información de la plantilla 'contact'

  public autor: any;

  @Output() getAutor = new EventEmitter();

  constructor() {
    this.autor = {
      name: "Luigi",
      web: "luigichavezz"
    }
   }

  
  ngOnInit(): void {

    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.ancho
    });
  }

  lanzar(event){
    this.getAutor.emit(this.autor);
  }

}
