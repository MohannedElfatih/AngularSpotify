import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artists } from '../../../../Artists';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SpotifyService]
})
export class SearchComponent {

  searchStr: string;
  searchRes: Artists[];

  constructor(private _spotifyService:SpotifyService){}

    searchMusic(){
      this._spotifyService.searchMusic(this.searchStr)
      .subscribe(res => {
        console.log(res.artists.items);
        this.searchRes = res.artists.items;
      });
    }
}
