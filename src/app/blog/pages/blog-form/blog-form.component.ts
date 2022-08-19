import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Blog } from '../../models/blog-interface';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogFormGroup: FormGroup;
  commentFormArray: FormArray;

  constructor(private fb: FormBuilder) { 
    this.blogFormGroup = this.fb.group({
      id: [''],
      title: [''],
      description: [''],
      author: [''],
      comments: this.fb.array([
        new FormControl('')
      ])
    });
    this.commentFormArray = this.blogFormGroup.get('comments') as FormArray
  }

  ngOnInit(): void {
  }

  submit() {
    const blogs = this.blogFormGroup.value as Blog
    console.log(blogs)
  }

}
