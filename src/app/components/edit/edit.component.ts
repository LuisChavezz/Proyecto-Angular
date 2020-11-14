import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project'; // Cargamos el modelo
import { ProjectService } from '../../services/project.service'; // Cargamos nuestro servicio 'project'
import { UploadService } from '../../services/upload.service'; // Cargamos nuestro servicio 'upload'
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['../create/create.component.css'],
  providers: [ProjectService, UploadService] // Uso de Servicios
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project; // Guarda el modelo 'project'
  public save_project;
  public status: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _projectService: ProjectService, //Guarda el servicio
    private _uploadService: UploadService, //Guarda el servicio
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
      this.title = "Editar Proyecto";
      this.project = new Project('', '', '', '', 2020, '', ''); // Creación del objeto Project
      this.url = global.url;
      
  }

  ngOnInit(): void { 
    this._route.params.subscribe( params => { // Recoge el parámetro de la URL
      let id = params.id;

      this.getProject(id);
      //console.log(this.url);
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

  onSubmit(){
    this._projectService.updateProject(this.project).subscribe(
      response => {
        if(response.project){ // Si se recibe el objeto JSON correctamente
          
          //Upload Image
          if(this.filesToUpload){
            this._uploadService.makeFileRequest( global.url+"upload-image/"+response.project._id, [], this.filesToUpload, 'image' )
            .then((result:any) => {

              this.save_project = result.project;
              this.status = 'success'; //**Para el mensaje**
            });
          }
          else{
            this.save_project = response.project;
            this.status = 'success'; //**Para el mensaje**
          }

        }
        else{
          this.status = 'failed';
        }
      },
      error => {
        console.error(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
