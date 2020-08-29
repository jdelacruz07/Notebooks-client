import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notebook } from './notebook';
import { catchError } from 'rxjs/operators';
import { ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = environment.apiUrl
  private authUrl = environment.authUrl

  constructor(private http: HttpClient) { }

  addLibreta(libreta: Notebook) {
    let params = JSON.stringify(libreta);
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    return this.http.post(this.authUrl, params, httpOptions);
  }

  deleteLibreta(id) {
    return this.http.delete(this.authUrl + id, { observe: 'response' })
      .pipe(catchError(async (err) => console.log("Error en el delete ", err.status)))
  }

  addLibretaBolsillo(libreta: Notebook): Observable<Notebook> {
    let headers = { 'Content-Type': 'application/json' };
    return this.http.post<Notebook>(this.authUrl, libreta, { 'headers': headers });
  }

  getAllNotebooks() {
    return this.http.get<Notebook[]>(this.authUrl);
  }

  getLibretaCarta(index) {
    return this.http.get<Notebook[]>(this.apiUrl);
  }

  getLibretaBolsillo(index) {
    return this.http.get<Notebook[]>(this.apiUrl);
  }

  getAllLibretasCarta() {
    return this.http.get<Notebook[]>(this.apiUrl);
  }

  getAllLibretasBolsillo() {
    return this.http.get<Notebook[]>(this.apiUrl);
  }

  getLibretasCarta(materialSelect) {
    return this.http.get<Notebook[]>(this.apiUrl);
  }

  getLibretasBolsillo(materialSelect) {
    return this.http.get<Notebook[]>(this.apiUrl);
  }


}


