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
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
              lat: '-37.3159',
              lng: '81.1496'
            }
          },
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
          company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
          }
        }
      ];
    }
  }
}
