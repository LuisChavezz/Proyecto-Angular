import { Component, OnInit, Input } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() ancho: number; //Propiedad que recoje al información de la plantilla 'contact'
  constructor() { }

  
  ngOnInit(): void {

    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: this.ancho
    });
  }
}
