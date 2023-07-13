import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/util/types';

@Component({
  selector: 'app-player-item',
  templateUrl: './player-item.component.html',
  styleUrls: ['./player-item.component.css']
})
export class PlayerItemComponent implements OnInit {
  @Input() player!: Player; 

  ngOnInit(): void {
    console.log(this.player);
    
  }

}
