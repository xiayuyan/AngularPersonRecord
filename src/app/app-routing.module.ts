import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookAddComponent } from './book-add/book-add.component';
import { PsychoDisplayComponent } from './psycho-display/psycho-display.component';
import { PsychoAddComponent } from './psycho-add/psycho-add.component';
import { PRecordDisplayComponent } from './p-record-display/p-record-display.component';
const routes: Routes = [
  { path: '', redirectTo: 'p-record-display', pathMatch: 'full'},
  { path: 'book-list', component: BookListComponent },
  { path: 'book-detail/:id', component: BookDetailComponent },
  { path: 'book-add', component: BookAddComponent },
  { path: 'psycho-display', component: PsychoDisplayComponent },
  { path: 'psycho-add', component: PsychoAddComponent },
  { path: 'p-record-display', component: PRecordDisplayComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]

})
export class AppRoutingModule { }
