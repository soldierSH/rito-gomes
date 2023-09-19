import { TestBed } from '@angular/core/testing';

import { ChampionNavigationService } from './champion-navigation.service';

describe('ChampionNavigationService', () => {
  let service: ChampionNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChampionNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
