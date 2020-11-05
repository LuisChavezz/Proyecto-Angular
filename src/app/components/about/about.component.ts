import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public mail: string;

  constructor() { 
    this.title = "Luis Chávez";
    this.subtitle = "Aprendiz de Desarrollo Web";
    this.mail = "ing.luischavezz@gmail.com";
  }

  ngOnInit(): void {
  }

}
