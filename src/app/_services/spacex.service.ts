import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://api.spacexdata.com/v3/launches';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class SpacexService {

  constructor(private http: HttpClient) { }

  /*this.http.get('http://localhost:63203/api/CallCenter/GetSupport', { headers: headers, search: params });*/

  getPrograms(limit:any, launch_success:any, land_success:any, launch_year:any): Observable<any> {
  	const headers = new HttpHeaders().append('Content-Type', 'application/json');
	const params = new HttpParams().append('limit', limit).append('launch_success', launch_success).append('land_success', land_success).append('launch_year', launch_year);
	return this.http.get(AUTH_API, {headers, params}); 

  }
}
