import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Book } from './book';

@Injectable()
export class BookService {
  private booksUrl = 'http://localhost:2403/books';

  constructor(private httpClient: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.booksUrl);
  }

  getBookById(id: string): Observable<Book> {
    return this.httpClient.get<Book>(`${this.booksUrl}/${id}`);
  }

  addBook(book: Book): Observable<Book> {
    return this.httpClient.post<Book>(this.booksUrl, book);
  }

  deleteBook(id: string): Observable<any> {
    return this.httpClient.delete(`${this.booksUrl}/${id}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.httpClient.put<Book>(this.booksUrl, book);
  }
}
