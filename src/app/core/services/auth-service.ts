import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { AUTH_ENDPOINTS } from '../constants/AUTH_ENDPOINTS';


@Injectable({
  providedIn: 'root',
})
export class AUTHService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    return this.http.post(AUTH_ENDPOINTS.Login, data);
  }
  Register(data: any): Observable<any> {
    return this.http.post(AUTH_ENDPOINTS.Register, data);
  }
}
