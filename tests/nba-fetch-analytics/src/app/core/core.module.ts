import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersTableComponent } from './players-table/players-table.component';
import { PlayerItemComponent } from './player-item/player-item.component';
import { TeamsComponent } from './teams/teams.component';



@NgModule({
  declarations: [
    PlayersTableComponent,
    PlayerItemComponent,
    TeamsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayersTableComponent,
    PlayerItemComponent,
    TeamsComponent,
  ]
})
export class CoreModule { }
