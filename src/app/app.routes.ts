import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from './books/books.component';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
