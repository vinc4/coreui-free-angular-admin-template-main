import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm} from "@angular/forms";
import {userModel} from "../../../interfaces/userModel";
import {UsersModule} from "../users.module";
import {UserService} from "../../../services/UserService";
import {Router} from "@angular/router";


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit{

  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;
  userModel: userModel = {email: "", firstName: "", lastName: "", password: "", role: "", userName: ""};

  userForm: FormGroup;

  constructor(private fb: FormBuilder ,private userService: UserService,private router: Router) {
    this.userForm = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      role: '',
      password: '',
      Username: '',
    });
  }

  ngOnInit(): void {

  }


  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

  onSubmit() {
    this.customStylesValidated = true;
    if(this.userForm.valid)
    {
      this.userService.addUser(this.userForm.value).subscribe(
        (response) => {
          console.log('User added successfully:', response);
          this.router.navigate(['/users']);
        },
        (error) => {
          console.error('Error adding user:', error);
        }
      );
    }
  }


}
