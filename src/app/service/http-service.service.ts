import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private headers: HttpHeaders;
  constructor(private httpClient: HttpClient) {
    this.setHeader();
  }


  public get<T> (url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.get<T>(url, {params}) ;
  }

  // public post<T> (url: string,body: string, auth: boolean = true): Observable<T> {
  //   return this.httpClient.post<T>(url,body, { headers: auth? this.headers}) ;
  // }

  public post<T> (url: string, body: string): Observable<T> {
    return this.httpClient.post<T>(url,body, {headers: this.headers}) ;
  }


  public put<T> (url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.put<T>(url, {params}) ;
  }

  public delet<T> (url: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.httpClient.delete<T>(url, {params}) ;
  }

  private setHeader() {
    this.headers = new HttpHeaders()
    .set('Accept', 'application/json')
    .set('Content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
  }
}
