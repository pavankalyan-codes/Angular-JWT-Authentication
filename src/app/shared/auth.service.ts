import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(user): Observable<any> {
    console.log(user);

    return this.http.post('http://localhost:5000/register', {
      email: user.email,
      password: user.password,
    });
  }

  login(user): Observable<any> {
    return this.http.post('http://localhost:5000/login', {
      email: user.email,
      password: user.password,
    });
  }

  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
