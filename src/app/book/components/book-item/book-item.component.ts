import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../models/book-interface';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {
  @Input() book: Book | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
