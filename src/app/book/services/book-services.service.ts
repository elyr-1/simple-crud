import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from '../models/book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {
  books: Book[] | undefined;

  constructor(private http: HttpClient) { }

  // GET list of books from database.json via API call
  getBooks = () => {
    return this.http.get<any>(`${environment.api}/books`).pipe(tap((response: any) => response));
    //return this.http.get<any>(`https://my-json-server.typicode.com/elyrick/fake-server/books`).pipe(tap((response: any) => response));
    //return this.http.get<any>(`http://localhost:3000/books`).pipe(tap((response: any) => response));
  }

  // EDIT details of existing books
  editBook = (data: Book) => {
    return this.http.put<Book[]>(`http://localhost:3000/books/${data.id}`, data).pipe(tap(mod => mod));
  }

  // CREATE new book details
  saveBook = (data: Book) => {
    return this.http.post(`http://localhost:3000/books/${data.id}`, data).pipe(tap(create => create));
  }

  // DELETE a book
  deleteBook = (id: number) => {
    return this.http.delete(`http://localhost:3000/books/${id}`).pipe(tap(del => del));
  }

  // GET specific book ID
  getBookId = (id: number) => {
    return this.getBooks().pipe(map((data: Book[]) => {return data.filter(book => book.id === id)}))
  }

}
