import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ChampionsRoutingModule } from './champions-routing.module';
import { ChampionsComponent } from './champions/champions.component';
import { ChampionDetailModule } from './detail.module';

@NgModule({
  declarations: [
    ChampionsComponent
  ],
  imports: [
    CommonModule,
    ChampionsRoutingModule,
    AppMaterialModule,
    SharedModule,
    ChampionDetailModule,
  ]
})
export class ChampionsModule { }
