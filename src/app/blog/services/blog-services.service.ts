import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Blog } from '../models/blog-interface';

@Injectable({
  providedIn: 'root'
})
export class BlogServicesService {
  blogs: Blog[] | undefined

  constructor(private http: HttpClient) { }

  getBlogs = () => {
    //return this.http.get<any>("http://localhost:3000/blogs").pipe(tap((response: any) => response));
    //return this.http.get<any>(`https://my-json-server.typicode.com/elyrick/fake-server/blogs`).pipe(tap((response: any) => response));
    return this.http.get<any>(`${environment.api}/blogs`).pipe(tap((response: any) => response));
  }
  
}
