import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { PsychoService } from './psycho.service';
import { PsychoDisplayComponent } from './psycho-display/psycho-display.component';
import { BookAddComponent } from './book-add/book-add.component';
import { PsychoAddComponent } from './psycho-add/psycho-add.component';
import { AppRoutingModule } from './/app-routing.module';
import { PRecordDisplayComponent } from './p-record-display/p-record-display.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookDetailComponent,
    BookAddComponent,
    PsychoDisplayComponent,
    PsychoAddComponent,
    PRecordDisplayComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [BookService, PsychoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
