import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endpoints, proxy } from '../util/constants';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  fetchData(target: string) {
    if (!target) target = endpoints.players;
    let address = endpoints[target];
    return this.http.get<any>(proxy + address);
  }
}
