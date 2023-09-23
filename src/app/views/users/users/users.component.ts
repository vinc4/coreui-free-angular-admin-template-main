import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../../../services/UserService";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  public data: any;

  constructor(private router: Router,private userService: UserService) {
  }

  ngOnInit(): void {
    this.getusers();
  }

  addDriver() {

  }

  addUser() {
    this.router.navigate(['/users/add-users']);
  }

  deleteUser(userSelected:any){
    userSelected.password ="ts"
    userSelected.Role = 'ts'
    this.userService.deleteUser(userSelected).subscribe((res) => {
      this.getusers();
    });

  }
  setUser(userSelected:any)
  {

    this.userService.updateUserData(userSelected);
  }

  getusers()
  {
    this.userService.getUsers().subscribe(
      (response) => {
        console.log('User added successfully:', response);
        this.data = response;
      },
      (error) => {
        console.error('Error geting user:', error);
      }
    );
  }




}
