import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book-interface';
import { BookServicesService } from '../../services/book-services.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: Book[] = []
  sb: Subscription | undefined

  constructor(private booksrv: BookServicesService) { 

    this.sb = this.booksrv.getBooks().subscribe(data => {this.books = data})
  }

  ngOnInit(): void { 
  }

  executeAction(books: Book) {
    console.log(books.id)
  }

}
