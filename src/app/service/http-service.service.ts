import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private httpClient: HttpClient) { }


  public get<T> (url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.get<T>(url, {params}) ;
  }

  public post<T> (url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.post<T>(url, {params}) ;
  }

  public put<T> (url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.put<T>(url, {params}) ;
  }

  public delet<T> (url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.delete<T>(url, {params}) ;
  }
}
