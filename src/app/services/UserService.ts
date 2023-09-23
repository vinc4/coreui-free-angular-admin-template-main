import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private userDataSubject = new BehaviorSubject<any[]>([]);
  private DriverDataSubject = new BehaviorSubject<any[]>([]);
  private VehicleDataSubject = new BehaviorSubject<any[]>([]);
  userData$ = this.userDataSubject.asObservable();
  driverData$ = this.DriverDataSubject.asObservable();
  vehicleData$ = this.VehicleDataSubject.asObservable();

  constructor(private http: HttpClient ,private config: ConfigService) {}


  addUser(user: any): Observable<any> {
    return this.http.post(this.config.apiUrl + 'Identity/api/register', user);
  }

  editUser(user: any): Observable<any> {
    return this.http.post(this.config.apiUrl + 'UserClient/api/usersUpdate', user);
  }

  deleteUser(user: any): Observable<any> {
    return this.http.post(this.config.apiUrl + 'UserClient/api/usersDelete', user);
  }

  getUsers(): Observable<any> {
    return this.http.get(this.config.apiUrl + 'UserClient/api/users/xx');
  }




  addDriver(user: any): Observable<any> {
    return this.http.post(this.config.apiUrl + 'Driver/tankboostapi/CreateDriver', user);
  }
  getDrivers(): Observable<any> {
    return this.http.get(this.config.apiUrl + 'Driver/tankboostapi/GetDrivers');
  }

  updateDrivers(driver:any): Observable<any> {
    return this.http.put(this.config.apiUrl + 'Driver/tankboostapi/UpdateDrivers',driver);
  }

  deleteDriver(driver:any): Observable<any> {
    driver.role = "User"
    driver.password = "password";
    driver.MiddleName  = "password";
    return this.http.post(this.config.apiUrl + 'Driver/tankboostapi/deleteDriver',driver);
  }

  addDriverVehicle(object: any): Observable<any> {
    return this.http.post(this.config.apiUrl + 'Vehicle/tankboostapi/AddDriverVehicle', object);
  }

  updateDriverVehicle(object: any): Observable<any> {
    return this.http.post(this.config.apiUrl + 'Vehicle/tankboostapi/updateDriverVehicle', object);
  }

  getDriverVehicle(): Observable<any> {
    return this.http.get(this.config.apiUrl + 'Vehicle/tankboostapi/GetDriverVehicle');
  }

  updateUserData(data: any[]) {
    this.userDataSubject.next(data);
  }

  driverUserData(data: any[]) {
    this.DriverDataSubject.next(data);
  }

  VehicleData(data: any[]) {
    this.VehicleDataSubject.next(data);
  }

  deleteDriverVehicle(selectedVehicle: any) {
    return this.http.post(this.config.apiUrl + 'Vehicle/tankboostapi/deleteDriverVehicle',selectedVehicle);
  }
}
