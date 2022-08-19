import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Blog } from '../../models/blog-interface';

@Component({
  selector: 'app-blog-item',
  templateUrl: './blog-item.component.html',
  styleUrls: ['./blog-item.component.scss']
})
export class BlogItemComponent implements OnInit {
  @Input() blog: Blog | undefined
  @Output() actionEmitter = new EventEmitter<Blog>();
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteBlog(id: any) {
    this.actionEmitter.emit(id);
  }

}
