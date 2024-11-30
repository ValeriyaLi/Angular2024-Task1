import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books: any[] = [];

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {
    this.booksService.getBooks().subscribe(
      (data) => {
        this.books = data;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
  }
}
