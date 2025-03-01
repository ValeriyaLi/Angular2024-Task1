import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private apiUrl = 'https://anapioficeandfire.com/api/books';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
