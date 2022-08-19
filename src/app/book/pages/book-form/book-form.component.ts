import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Book } from '../../models/book-interface';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookFormGroup: FormGroup;
  authorFormArray: FormArray;

  constructor(private fb: FormBuilder) { 
    this.bookFormGroup = this.fb.group({
      id: [''],
      name: [''],
      authors: this.fb.array([
        new FormControl('')
      ]),
      isbn: ['']
    });
    this.authorFormArray = this.bookFormGroup.get('authors') as FormArray
  }

  ngOnInit(): void {
  }

  addAuthor() {
    this.authorFormArray.push(new FormControl(''));
  }

  removeAuthor(i: number) {
    this.authorFormArray.removeAt(i);
  }

  submit() {
    // cast as Book (for strict typing)
    const books = this.bookFormGroup.value as Book
    console.log(books);
  }

}
