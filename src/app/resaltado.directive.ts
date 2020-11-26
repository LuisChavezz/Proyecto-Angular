import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor( 
    public el: ElementRef 
    ) { 
    
  }

  ngOnInit(){
    var element = this.el.nativeElement;
      element.style.background = "blue";
      element.innerText = element.innerText.replace("dudas", "#$%&").toUpperCase();
  }
}
