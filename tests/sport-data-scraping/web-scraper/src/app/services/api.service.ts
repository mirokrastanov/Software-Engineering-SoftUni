import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  fetchData() {
    const proxy = 'https://proxy-1.mirokrastanov.repl.co/';
    const players = 'www.balldontlie.io/api/v1/players';
    const games = 'www.balldontlie.io/api/v1/games';
    // const website = 'https://proxy-1.mirokrastanov.repl.co/jsonplaceholder.typicode.com/posts';
    return this.http.get<any>(proxy + players);
  }
}
