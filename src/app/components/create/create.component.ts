import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; // Cargamos el modelo
import { ProjectService } from '../../services/project.service'; // Cargamos nuestro servicio 'project'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService] // Uso de Servicios
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project; // Guarda el modelo 'project'
  public status: string;

  constructor(
    private _projectService: ProjectService //Guarda el servicio
  ) { 
      this.title = "Crear Proyecto";
      this.project = new Project('', '', '', '', 2020, '', ''); // Creación del objeto Project
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    this._projectService.saveProjects(this.project).subscribe(
      response => {
        if(response.project){ // Si se recibe el objeto JSON correctamente
          this.status = 'success';
        }
        else{
          this.status = 'failed';
        }
      },
      error => { console.log(<any>error); }
    );
  }

}
