import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; // Cargamos el modelo
import { ProjectService } from '../../services/project.service'; // Cargamos nuestro servicio 'project'
import { UploadService } from '../../services/upload.service'; // Cargamos nuestro servicio 'upload'
import { global } from '../../services/global';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService] // Uso de Servicios
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project; // Guarda el modelo 'project'
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _projectService: ProjectService, //Guarda el servicio
    private _uploadService: UploadService //Guarda el servicio
  ) { 
      this.title = "Crear Proyecto";
      this.project = new Project('', '', '', '', 2020, '', ''); // Creación del objeto Project
  }

  ngOnInit(): void {
  }

  onSubmit(form){
    //Save Info
    this._projectService.saveProjects(this.project).subscribe(
      response => {
        if(response.project){ // Si se recibe el objeto JSON correctamente
          
          //Upload Image
          this._uploadService.makeFileRequest( global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image' )
          .then((result:any) => {
            this.save_project = result.project;
            console.log(result);
            this.status = 'success'; //**Para el mensaje**
            form.reset(); //Resetea el formulario
          });

        }
        else{
          this.status = 'failed';
        }
      },
      error => { console.log(<any>error); }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
