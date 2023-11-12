import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enseignant } from '../Models/Enseignant';

@Injectable({
  providedIn: 'root'
})
export class EnseignantServiceService {
  private API_URL ="http://192.168.33.10:8066/kaddem/enseignant/add-enseignant"

  constructor(private http:HttpClient) { }
  addEnseignant(enseignant: Enseignant): Observable<any> {
    const url = `${this.API_URL}`;
    return this.http.post(url, enseignant);
  }

}
