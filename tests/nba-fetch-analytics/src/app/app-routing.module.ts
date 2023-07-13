import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersTableComponent } from './core/players-table/players-table.component';
import { TeamsComponent } from './core/teams/teams.component';
import { StatsComponent } from './core/stats/stats.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PlayersTableComponent },
  { path: 'players', component: PlayersTableComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'stats', component: StatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
