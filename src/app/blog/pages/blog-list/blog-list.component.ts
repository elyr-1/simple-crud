import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Blog } from '../../models/blog-interface';
import { BlogServicesService } from '../../services/blog-services.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogs: Blog[] = []
  sb: Subscription | undefined

  constructor(private blogsrv: BlogServicesService) { 
    //this.blogs = new BlogServicesService().getBlogs();
    this.sb = this.blogsrv.getBlogs().subscribe(data => {this.blogs = data})
  }

  ngOnInit(): void {
  }

  executeAction(blogs: Blog) {
    console.log(blogs.id)
  }

}
