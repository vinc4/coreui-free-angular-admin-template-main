import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../../../services/UserService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-driver',
  templateUrl: './edit-driver.component.html',
  styleUrls: ['./edit-driver.component.scss']
})
export class EditDriverComponent {
  userForm: any;
  customStylesValidated: any;

  constructor(private fb: FormBuilder ,private userService: UserService,private router: Router, private formBuilder: FormBuilder ) {
    this.userForm = this.fb.group({
      id:[''],
      firstname: ['', [Validators.required]],
      middlename: [''],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      contractnumber: ['', [Validators.required]],
      licensenumber: ['', [Validators.required]],
      role: ['user', [Validators.required]],
      password: ['', [Validators.required]],
      issueDate: ['', [Validators.required]],
      expirationDate: ['', [Validators.required]],
      iDNumber: ['', [Validators.required]],
      status: ['Active'],

    });
  }

  onSubmit() {
    this.userService.updateDrivers(this.userForm.value).subscribe(
      (response) => {
        console.log('User added successfully:', response);
        this.router.navigate(['/drivers']);
      },
      (error) => {
        console.error('Error adding user:', error);
      }
    );
  }

  ngOnInit(): void {
    this.userService.driverData$.subscribe((userData) => {
      this.userForm = userData;

      this.userForm.issueDate = this.convertDate(this.userForm.issueDate)
      this.userForm.expirationDate = this.convertDate(this.userForm.expirationDate)


      this.userForm = this.formBuilder.group({
        firstname: [this.userForm.firstName, Validators.required],
        lastname: [this.userForm.lastName, Validators.required],
        email: [this.userForm.email, Validators.required],
        phone: [this.userForm.phone, [Validators.required]],
        gender: [this.userForm.gender, [Validators.required]],
        contractnumber: [this.userForm.contractNumber, [Validators.required]],
        licensenumber: [this.userForm.licenseNumber, [Validators.required]],
        issueDate: [this.userForm.issueDate, [Validators.required]],
        expirationDate: [this.userForm.expirationDate, [Validators.required]],
        iDNumber: [this.userForm.idNumber, [Validators.required]],
        address: [this.userForm.address, [Validators.required]],
        status: ['Active'],
        role: ['User'],
        password: ['User'],
        middleName : ['User'],
        id:[this.userForm.id],

      });

    });
  }

  convertDate(originalDateString:string){
    const originalDate = new Date(originalDateString);

    const newDate = new Date(originalDate);
    newDate.setDate(originalDate.getDate() - 15);
    const formattedDate = newDate.toISOString().split('T')[0];
    return formattedDate;
  }
}
