import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GiraService {

  constructor(private http: HttpClient) { }

  getGira(){
    return this.http.get(environment.url + '/branchs');
  }



}
