import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayersTableComponent } from './core/players-table/players-table.component';
import { TeamsComponent } from './core/teams/teams.component';
import { StatsComponent } from './core/stats/stats.component';
import { HomeComponent } from './core/home/home.component';
import { ErrorComponent } from './core/error/error.component';

const routes: Routes = [ // UPPER/LOWER CASE MATTERS !!!!!!! routerLink in the html should MATCH IT!!!
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent}, 
  { path: 'players', component: PlayersTableComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'stats', component: StatsComponent },
  { path: '**', component: ErrorComponent }, // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
