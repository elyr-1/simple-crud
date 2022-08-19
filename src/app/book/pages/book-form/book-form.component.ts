import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Book } from '../../models/book-interface';
import { BookServicesService } from '../../services/book-services.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  books: Book[] = [];
  bookId: any;
  bookFormGroup: FormGroup;
  authorFormArray: FormArray;
  sub!: Subscription;

  constructor(private fb: FormBuilder, private booksrv: BookServicesService, private route: ActivatedRoute) { 
    this.bookFormGroup = this.fb.group({
      id: [''],
      name: [''],
      authors: this.fb.array([
        new FormControl('')
      ]),
      isbn: ['']
    });
    this.authorFormArray = this.bookFormGroup.get('authors') as FormArray;

    this.bookId = this.route.snapshot.paramMap.get('id');

    switch(this.bookId) {
      case 'false':
        this.books = [{id: 0, name: '', authors: [''], isbn: ''}]
        break;
      case 'true':
        this.sub = booksrv.getBookId(parseInt(this.bookId)).subscribe(book => {
          this.bookFormGroup.patchValue(book[0]);
          for(let data of book[0].authors) {
            this.authorFormArray.push(new FormControl(data))
          }
        })
        break;
    }
  }

  ngOnInit(): void {
  }

  // add an author
  addAuthor() {
    this.authorFormArray.push(new FormControl(''));
  }

  // remove an author at index i
  removeAuthor(i: number) {
    this.authorFormArray.removeAt(i);
  }

  submit = () => {
    // cast as Book (for strict typing)
    const books = this.bookFormGroup.value as Book
    // if(this.bookId === 'false') {
    //   return this.booksrv.saveBook(books).subscribe()
    // }
    console.log(books);
    // switch (this.bookId) {
    //   case false:
    //     return this.booksrv.saveBook(books);
    //     break;
    //   case true:
    //     return this.booksrv.editBook(books);
    //     break;
    // }
  }

}
