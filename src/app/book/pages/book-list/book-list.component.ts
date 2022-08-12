import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book-interface';
import { BookServicesService } from '../../services/book-services.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = []

  constructor() { 
    this.books = new BookServicesService().getBooks();
  }

  ngOnInit(): void {
  }

}
