import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; // Cargamos el modelo
import { ProjectService } from '../../services/project.service'; // Cargamos nuestro servicio 'project'
import { global } from '../../services/global';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService] // Uso de Servicios
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url: string;

  constructor(
    private _projectService: ProjectService
  ) { 
    this.url = global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(){
    this._projectService.getProjects().subscribe(
      response => {
        if(response.projects){
          this.projects = response.projects;
        }
      },
      error => {
        console.error(<any>error);
      }
    )
  }
}
