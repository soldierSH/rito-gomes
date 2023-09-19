import { ChampionDetailsComponent } from '../champion-details/champion-details.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ChampionDetailsComponent],
  imports: [
    RouterModule.forChild([
      { path: 'champions', component: ChampionDetailsComponent}
    ])
  ],
})
export class ChampionDetailModule {}
