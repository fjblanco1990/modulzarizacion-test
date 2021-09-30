import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpServiceService } from './http-service.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private url = environment.baseUrl;
  constructor(private httpService: HttpServiceService) { }

  public getUser(): Observable<any> {
    const url = `${ this.url}users`;
    return this.httpService.get(url);
  }

}
