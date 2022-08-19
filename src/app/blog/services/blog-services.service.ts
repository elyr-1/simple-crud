import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Blog } from '../models/blog-interface';

@Injectable({
  providedIn: 'root'
})
export class BlogServicesService {
  blogs: Blog[] | undefined

  constructor(private http: HttpClient) { }

  getBlogs = () => {
    return this.http.get<any>("http://localhost:3000/blogs").pipe(tap((response: any) => response))
  }
  
}
