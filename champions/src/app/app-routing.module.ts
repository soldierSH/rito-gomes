import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionDetailsComponent } from './champion-details/champion-details.component';

import { ChampionsComponent } from './champions/champions/champions.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'champions'},
  { path: 'details', component: ChampionDetailsComponent },
  {path:'champions',
  loadChildren: () => import('./champions/champions.module').then(m => m.ChampionsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
