import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarnetService {
  CarnetUrl: string = 'http://127.0.0.1:8000/carnet/';
  RegionURL: string = 'https://geo.api.gouv.fr/regions?fields=nom,code';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  constructor(private http: HttpClient) {}
  getCarnets(): Observable<any> {
    return this.http.get(this.CarnetUrl + 'all', this.httpOptions);
  }
  getRegion(): Observable<any> {
    return this.http.get(this.RegionURL, this.httpOptions);
  }
  addCarnet(articel: any): Observable<any> {
    return this.http.post(this.CarnetUrl + 'new', articel, this.httpOptions);
  }
  deleteCarnet(id: any): Observable<any> {
    return this.http.delete(this.CarnetUrl + 'delete/'+id, this.httpOptions);
  }
}
