import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersTableComponent } from './players-table/players-table.component';
import { PlayerItemComponent } from './player-item/player-item.component';
import { TeamsComponent } from './teams/teams.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { AppRoutingModule } from '../app-routing.module';
import { GlobalLoaderComponent } from './global-loader/global-loader.component';


@NgModule({
  declarations: [
    PlayersTableComponent,
    PlayerItemComponent,
    TeamsComponent,
    StatsComponent,
    HomeComponent,
    ErrorComponent,
    GlobalLoaderComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports: [
    PlayersTableComponent,
    PlayerItemComponent,
    TeamsComponent,
    StatsComponent,
    HomeComponent,
    ErrorComponent,
  ]
})
export class CoreModule { }
