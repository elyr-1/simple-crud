import { Injectable } from '@angular/core';
import { Book } from '../models/book-interface';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {
  books: Book[] = [
    {
      id: 1001,
      name: "The Alchemist",
      authors: ["Paulo Coelho"],
      isbn: "0003281752"
    },
    {
      id: 1002,
      name: "Forrest Gump",
      authors: ["Winston Groom"],
      isbn: "0552996092"
    },
    {
      id: 1003,
      name: "Divergent",
      authors: ["Veronica Roth"],
      isbn: "0063040514"
    },
    {
      id: 1004,
      name: "Insurgent",
      authors: ["Veronica Roth"],
      isbn: "0008468958"
    },
    {
      id: 1005,
      name: "Harry Potter and the Sorcerer's Stone",
      authors: ["J.K. Rowling"],
      isbn: "0747532745"
    },
    {
      id: 1006,
      name: "Harry Potter and the Chamber of Secrets",
      authors: ["J.K. Rowling"],
      isbn: "0747538484"
    },
    {
      id: 1007,
      name: "Harry Potter and the Prisoner of Azkaban",
      authors: ["J.K. Rowling"],
      isbn: "0747546290"
    },
    {
      id: 1008,
      name: "Harry Potter and the Goblet of Fire",
      authors: ["J.K. Rowling"],
      isbn: "9123938471"
    },
    {
      id: 1009,
      name: "Harry Potter and the Order of the Phoenix",
      authors: ["J.K. Rowling"],
      isbn: "0747551006"
    },
    {
      id: 1010,
      name: "Harry Potter and the Half-Blood Prince",
      authors: ["J.K. Rowling"],
      isbn: "0439784549"
    },
    {
      id: 1011,
      name: "Harry Potter and the Deathly Hallows - Part 1",
      authors: ["J.K. Rowling"],
      isbn: "0545139708"
    },
    {
      id: 1012,
      name: "Harry Potter and the Deathly Hallows - Part 2",
      authors: ["J.K. Rowling"],
      isbn: "0739083872"
    },
  ]

  getBooks = () => {
    return this.books;
  }

  constructor() { }
}
