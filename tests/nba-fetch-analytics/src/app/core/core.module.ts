import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersTableComponent } from './players-table/players-table.component';
import { PlayerItemComponent } from './player-item/player-item.component';



@NgModule({
  declarations: [
    PlayersTableComponent,
    PlayerItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayersTableComponent,
    PlayerItemComponent
  ]
})
export class CoreModule { }
