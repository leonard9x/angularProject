import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from './models/movie';

// Get data asynchronously with Observable
// import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
    getMovies(): Observable<Movie[]>{
      this.messageService.add(`${new Date().toLocaleString()}.Get Movies List`);
      return of(fakeMovies);
    }
  constructor(public messageService: MessageService) { }
}
