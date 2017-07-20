import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PlayersComponent } from './players/players.component';
import { PlayerDetailComponent } from './player-detail/player-detail.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
      path: 'players/:id',
      component: PlayerDetailComponent
  },
  {
    path: 'players',
    component: PlayersComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
