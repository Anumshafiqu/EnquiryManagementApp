import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  apiUrl: string = 'https://freeapi.gerasim.in/api/youtube/';

  constructor(private http: HttpClient) {} // Properly inject HttpClient

  getAllEnqury(): Observable<any> {
    return this.http.get(`${this.apiUrl}GetAllEnquries`);
  }
  getAllEnquryStatus(): Observable<any> {
    return this.http.get(`${this.apiUrl}GetAllEnquiryStatus`);
  }
  getAllSubject(): Observable<any> {
    return this.http.get(`${this.apiUrl}GetAllEnquirySubject`);
  }
  CreateNewEnquiry(obj:any):Observable<any> {
    debugger;
    return this.http.post(`${this.apiUrl}AddNewEnquiry`,obj)
  }
  filterenquiry(obj:any):Observable<any> {
    debugger;
    return this.http.post(`${this.apiUrl}FilterEnquries`,obj)
  }
}
