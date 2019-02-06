import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RESTDAOService } from '../base-code/dao.service';

@Injectable({
  providedIn: 'root'
})
export class UsersDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'users');
  }
}

@Injectable()
export class UsersViewModelDAOService {
  protected listado: Array<any> = null;

  constructor(protected dao: UsersDAOService, protected router: Router) { }

  public get Listado() { return Object.assign([], this.listado); }

  public get ListadoOrdenado() {
    if (this.listado != null) {
      return Object.assign([], this.listado.sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      return Object.assign([], null);
    }
  }

  public list() {
    this.dao.query().subscribe(
      data => {
        this.listado = data;
      }
    );
  }
}

@Injectable()
export class UsersViewModelService {
  protected listado: Array<any> = null;

  constructor() { }

  public get Listado() { return Object.assign([], this.listado); }

  public get ListadoOrdenado() {
    if (this.listado != null) {
      return Object.assign([], this.listado.sort((a, b) => a.name.localeCompare(b.name)));
    } else {
      return Object.assign([], null);
    }
  }

  public list() {
    if (!this.listado) {
      this.listado = [
        { id: 1, nombre: 'Carmelo', apellidos: 'Coton', edad: 18 },
        { id: 2, nombre: 'Pepito', apellidos: 'Grillo', edad: 155},
        { id: 3, nombre: 'Pedro', apellidos: 'Pica Piedra', edad: 50},
        { id: 4, nombre: 'Pablo', apellidos: 'Marmol', edad: 45}
      ];
    }
  }
}
