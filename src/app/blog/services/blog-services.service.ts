import { Injectable } from '@angular/core';
import { Blog } from '../models/blog-interface';

@Injectable({
  providedIn: 'root'
})
export class BlogServicesService {
  blogs: Blog[] = [
  {
    id: 1,
    title: "Formula 1",
    description: "F1 2022 Season",
    author: "Federation Internationale de l'Automobile",
    comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    featured: true
  },
  {
    id: 2,
    title: "Formula 2",
    description: "F2 2022 Season",
    author: "Federation Internationale de l'Automobile",
    comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    featured: false
  },
  {
    id: 3,
    title: "Formula 3",
    description: "F3 2022 Season",
    author: "Federation Internationale de l'Automobile",
    comments: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."],
    featured: false
  }
]

  getBlogs = () => {
    return this.blogs;
  }

  delete(id: number) {
    this.blogs = this.blogs.filter((d) => d.id !== id)
  } 

  constructor() { }
}
