import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/UserService";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.scss']
})
export class EditUsersComponent implements OnInit{

  customStylesValidated = false;
  browserDefaultsValidated = false;
  tooltipValidated = false;
  user:any;


  userForm: FormGroup;

  constructor(private fb: FormBuilder ,private userService: UserService,private router: Router, private formBuilder: FormBuilder ) {
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
    this.userService.userData$.subscribe((userData) => {
      this.user = userData;

      this.userForm = this.formBuilder.group({
        Firstname: [this.user.firstname, Validators.required],
        Lastname: [this.user.lastName, Validators.required],
        Email: [this.user.email, Validators.required],
        Role: [this.user.userRole, Validators.required],
        Password: ''
        // Add more form fields as needed
      });

    });
  }


  onReset1() {
    this.customStylesValidated = false;
    console.log('Reset... 1');
  }

  onSubmit() {
    this.customStylesValidated = true;
    if(this.userForm.valid)
    {
      this.userService.editUser(this.userForm.value).subscribe(
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
