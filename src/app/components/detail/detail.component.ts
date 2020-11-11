import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; // Cargamos el modelo
import { ProjectService } from '../../services/project.service'; // Cargamos nuestro servicio 'project'
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService] // Uso de Servicios
})
export class DetailComponent implements OnInit {
  public url: string;
  public project: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void { 
    this._route.params.subscribe( params => { // Recoge el parámetro de la URL
      let id = params.id;

      this.getProject(id);
    });
  }

  getProject(id){
    this._projectService.getProject(id).subscribe(
      response => {
        this.project = response.project;
      },
      error => {
        console.error(<any>error);
      }
    )
  }
}
