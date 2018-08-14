import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Location } from '@angular/common';
import { Book } from '../book';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss']
})
export class BookAddComponent implements OnInit {

  constructor(private bookService: BookService, private location: Location) { }

  ngOnInit() {
  }

  add(no: string, name: string, description: string): void {
    if (!no || !name) { return; }
    this.bookService.addBook({no, name, description} as Book)
    .subscribe();
  }

  goBack(): void {
    this.location.back();
  }
}
