import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: Book;
  constructor(private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

  ngOnInit() {
    this.getBook();
  }
  getBook(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id)
      .subscribe(book => this.book = book);
  }

  save(): void {
    this.bookService.updateBook(this.book)
    .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
