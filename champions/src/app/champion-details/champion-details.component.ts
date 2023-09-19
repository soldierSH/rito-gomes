
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Champion } from '../champions/model/champion';
import { ChampionNavigationService } from '../champions/services/champion-navigation.service';
import { ChampionsService } from '../champions/services/champions.service';

@Component({
  selector: 'app-champion-details',
  templateUrl: './champion-details.component.html',
  styleUrls: ['./champion-details.component.scss'],
})
export class ChampionDetailsComponent implements OnInit {
  champion: Champion | undefined;

  constructor(private route: ActivatedRoute, private navigateService: ChampionNavigationService, private championsService: ChampionsService) {}

  ngOnInit() {
    const championName = this.route.snapshot.queryParamMap.get('name');
    if (championName) {
      this.championsService.list().subscribe(champions => {
        this.champion = champions.find(champion => champion.name === championName);
      });
    }
  }
  navigateToDetails(championName: string) {
    this.navigateService.navigateToDetails(championName)
  }
}
