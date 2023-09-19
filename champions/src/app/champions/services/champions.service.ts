import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first } from 'rxjs';
import { Champion } from '../model/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private readonly API = 'api/champions'

  constructor(private httpClient: HttpClient) { }
  list(){
    return this.httpClient.get<Champion[]>(this.API).pipe(
      first(),
    );
  }
}
