import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Blog } from '../../models/blog-interface';
import { BlogServicesService } from '../../services/blog-services.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent implements OnInit {
  blogFormGroup: FormGroup;
  commentFormArray: FormArray;
  blogs: Blog[] = [];
  blogId: any;
  sub: Subscription | undefined;

  constructor(private fb: FormBuilder, private blogsrv: BlogServicesService, private route: ActivatedRoute, private router: Router) { 
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

  // this.sub = this.blogsrv.sub(parseInt(this.blogId)).subscribe(data => {
  //   this.blogFormGroup = this.fb.
  // })

  submit() {
    const blogs = this.blogFormGroup.getRawValue() as Blog
    console.log(blogs)
  }

  addComment() {
    this.commentFormArray.push(new FormControl(''));
  }

}
