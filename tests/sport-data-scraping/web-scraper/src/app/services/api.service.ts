import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchData() {
    // const website = 'https://scores.weaklytyped.com/api/v1/sports/nba/events';
    // const website = 'https://jsonplaceholder.typicode.com/posts';
    const website = 'http://localhost:3000';
    return this.http.get<any>(website);
  }
}
