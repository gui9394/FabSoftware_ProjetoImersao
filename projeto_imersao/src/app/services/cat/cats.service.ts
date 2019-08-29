import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

//Url para o endpoint que usaremos
var baseUrl = "https://api.thecatapi.com/v1/images/search?breed_ids=";


@Injectable({
  providedIn: 'root'
})
export class CatsService {

  nome: string = '';

  constructor(private http: HttpClient) { }
 
  procurarGato(nome: string): Observable<any>{
    return this.http.get(baseUrl + nome).pipe(map((res: any) => {
      return res;
    }))
    
  }
}
