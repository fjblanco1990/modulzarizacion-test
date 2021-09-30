import { Component, OnInit } from '@angular/core';
import { take, tap } from 'rxjs/operators';
import { AlbunesService } from 'src/app/service/albunes.service';
import { AppState } from 'src/app/service/app.state';


@Component({
  selector: 'app-albunes',
  templateUrl: './albunes.component.html',
  styleUrls: ['./albunes.component.css'],
  providers: [AlbunesService]
})
export class AlbunesComponent implements OnInit {

  constructor(
    private albumService: AlbunesService,
    private appState: AppState
  ) { }

  ngOnInit(): void {
    this.initializeData();
  }

  private initializeData(): void {
    this.albumService.getAlbums().pipe(
      take(1),
      tap((albums) => this.appState.albumSubject.set(albums))
    ).subscribe();
  }

}
