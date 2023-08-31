import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cita } from '../interfaces/cita';

@Injectable({
  providedIn: 'root',
})
export class CitaService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.endpoint;
    this.myApiUrl = 'api/citas/';
  }

  getListCitas(): Observable<Cita[]> {
    return this.http.get<Cita[]>(`${this.myAppUrl}${this.myApiUrl}`);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  saveCita(cita: Cita): Observable<void> {
    return this.http.post<void>(`${this.myAppUrl}${this.myApiUrl}`, cita);
  }

  getCita(id: number): Observable<Cita> {
    return this.http.get<Cita>(`${this.myAppUrl}${this.myApiUrl}${id}`);
  }

  putCita(id: number, cita: Cita): Observable<void> {
    return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, cita);
  }
}
