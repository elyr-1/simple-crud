import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog-interface';
import { BlogServicesService } from '../../services/blog-services.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = []

  constructor() { 
    this.blogs = new BlogServicesService().getBlogs();
  }

  ngOnInit(): void {
  }

  executeAction(blogs: Blog) {
    console.log(blogs.id)
  }

}
