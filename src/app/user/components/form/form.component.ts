import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  profileFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.profileFormGroup = this.fb.group({
      name: [''],
      email: [''],
      bio: [''],
      active: ['']
    })
  }

  ngOnInit(): void {
  }

  submit = () => {
    console.log(this.profileFormGroup.value)
  }

}
