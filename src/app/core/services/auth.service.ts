import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {apiEndpoints} from '../constants/api-endpoints';
import { RegisterDTO } from '../interfaces/RegisterDTO';
import { APIResponse } from '../interfaces/APIResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthService
{
    constructor(private http: HttpClient) {}

    register(registerData: RegisterDTO): Observable<APIResponse<RegisterDTO>>
    {
        const formData = new FormData();
        formData.append('fullName', registerData.fullName);
        formData.append('phoneNumber', registerData.phoneNumber);
        formData.append('jobTitle', registerData.jobTitle);
        formData.append('email', registerData.email);
        formData.append('password', registerData.password);
        formData.append('confirmPassword', registerData.confirmPassword);
        formData.append('contractedCompanyName', registerData.contractedCompanyName);
        formData.append('nationalIdNumber', registerData.nationalIdNumber);
        return this.http.post<APIResponse<RegisterDTO>>(apiEndpoints.Register, formData);
    }
}


