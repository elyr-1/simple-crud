import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../../models/user-interface'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  user: User[] = []

  constructor(private fb: FormBuilder) { 
    this.regForm = this.fb.group({
      name: [''],
      email: [''],
      bio: [''],
      active: ['']
    })
  }

  ngOnInit(): void {
  }

  register = () => {
    const newUser = this.regForm?.getRawValue() as User
    console.log(newUser)
  }

}
