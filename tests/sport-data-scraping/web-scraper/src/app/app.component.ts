import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  constructor (private apiService: ApiService) {}
  dataArray: any;
  metaObject: any;

  ngOnInit(): void {
    this.apiService.fetchData().subscribe({
      next: (data) => {
        this.dataArray = data.data;
        this.metaObject = data.meta;
        console.log(data);
        console.log(data.data[0]);
                
      }
    });
  } 

  handleClick(): void {

  }


}
