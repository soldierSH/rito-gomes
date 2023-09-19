import { Champion } from './../model/champion';
import { ChampionNavigationService } from './../services/champion-navigation.service';
import { ChampionsService } from './../services/champions.service';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss'],
})
export class ChampionsComponent implements OnInit{
  champions$:  Observable<Champion[]>;
  displayedColumns = ['name','funcao','dificuldade'];
  clickedRows = new Set<Champion>();
  champion: Champion | undefined;
  constructor(public dialog: MatDialog, private championsService: ChampionsService, private navigateService: ChampionNavigationService){
    this.champions$ = this.championsService.list().pipe(
      catchError(error => {
        this.onError('Iiiiih! Deu ruim.')
        return of([])
      })
    )
  }
  clickDetails(championName: string) {
    //this.champion = champion;
    this.navigateService.navigateToDetails(championName);
  }
  onError(errorMsg: string){
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }
  ngOnInit(): void {

  }
}
