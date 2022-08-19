import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { Book } from '../models/book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {
  books: Book[] | undefined;

  constructor(private http: HttpClient) { }

  getBooks = () => {
    return this.http.get<any>("http://localhost:3000/books").pipe(tap((response: any) => response));
  }

}
