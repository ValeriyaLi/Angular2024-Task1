import { bootstrapApplication } from '@angular/platform-browser';
import { BooksComponent } from './app/books/books.component';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(BooksComponent, {
  providers: [provideHttpClient()]
}).catch((err) => console.error(err));
