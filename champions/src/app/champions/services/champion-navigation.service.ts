import { Champion } from './../model/champion';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ChampionNavigationService {
  constructor(private router: Router) {}

  navigateToDetails(championName: string) {
    this.router.navigate(['/details'], { queryParams: { name: championName} });
  }
}
