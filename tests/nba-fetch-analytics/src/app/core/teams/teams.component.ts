import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  constructor(private apiService: ApiService) { }
  teamsArray: any;
  metaObject: any;

  ngOnInit(): void {
    this.apiService.fetchData('teams').subscribe({
      next: (data) => {
        this.teamsArray = data.data;
        this.metaObject = data.meta;
        console.log(data);
        console.log(data.data[0]);
        let test: object = {};
        console.log(test.hasOwnProperty('teams'));




      }
    });
  }

}





