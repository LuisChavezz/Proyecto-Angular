//Servicio del 'project'
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; //npm install --save rxjs-compat 
import { Project } from '../models/project';
import { global } from './global';

@Injectable()
export class ProjectService{
    public url: string;

    constructor(
        private _http: HttpClient
    ) {
        this.url = global.url;
    }

    testService(){
        return 'El Servicio funciona correctamente.';
    }
}