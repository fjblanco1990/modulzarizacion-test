import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { filter, map, tap } from 'rxjs/operators';
import { HttpServiceService } from './http-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbunesService {
  private url = environment.baseUrl;
  constructor(private httpService: HttpServiceService) { }

  public getAlbums(): Observable<any> {
    const url = `${ this.url}albums`;
    return this.httpService.get(url);
  }

}
