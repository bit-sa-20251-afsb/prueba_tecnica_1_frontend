import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  listUsers() : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/get-users`);
  }
  
  createUser(user: any): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/create-user`, user);
  }
}
