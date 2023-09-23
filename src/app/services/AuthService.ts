import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {ConfigService} from "./config.service";
import {authData} from "../interfaces/authData";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authToken: string | null = null;
  private authData: authData | undefined;
  private authTokenKey = 'authToken';
  constructor(private http: HttpClient,private config: ConfigService) {}

  login(username: string | null | undefined, password: string | null | undefined): Observable<any> {
    const loginData = {
      email: username,
      password: password
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.config.apiUrl + 'Identity/api/login', loginData, { headers });
  }

  setAuthData(data: authData) {
    this.authData = data;
  }

  isAuthenticated(): boolean {
    //return !!this.authToken; // Returns true if authToken is not null or empty
    return !!this.getAuthToken();
  }

  getAuthData(): authData | undefined {
    return this.authData;
  }

  setAuthToken(token: string) {
    //this.authToken = token;
    localStorage.setItem(this.authTokenKey, token);
  }

  getAuthToken(): string | null {
    //return this.authToken;
    return localStorage.getItem(this.authTokenKey);
  }

  logout(): void {
    // Clear the authentication-related data
    //this.authToken = null;
    localStorage.removeItem(this.authTokenKey);
    // ... clear other data as needed ...
  }
}
