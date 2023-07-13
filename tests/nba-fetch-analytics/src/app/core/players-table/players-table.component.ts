import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-players-table',
  templateUrl: './players-table.component.html',
  styleUrls: ['./players-table.component.css']
})
export class PlayersTableComponent implements OnInit{
  constructor(private apiService: ApiService) { }
  dataArray: any;
  metaObject: any;

  ngOnInit(): void {
    this.apiService.fetchData('players').subscribe({
      next: (data) => {
        this.dataArray = data.data;
        this.metaObject = data.meta;
        console.log(data);
        console.log(data.data[0]);
        let test: object = {};
        console.log(test.hasOwnProperty('players'));

      }
    });
  }
}
