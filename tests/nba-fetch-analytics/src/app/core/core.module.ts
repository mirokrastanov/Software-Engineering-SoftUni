import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersTableComponent } from './players-table/players-table.component';
import { PlayerItemComponent } from './player-item/player-item.component';
import { TeamsComponent } from './teams/teams.component';
import { StatsComponent } from './stats/stats.component';



@NgModule({
  declarations: [
    PlayersTableComponent,
    PlayerItemComponent,
    TeamsComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PlayersTableComponent,
    PlayerItemComponent,
    TeamsComponent,
    StatsComponent,
  ]
})
export class CoreModule { }
