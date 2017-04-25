import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artists } from '../../../../Artists';
import { Album } from '../../../../Album';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css'],
    providers: [SpotifyService]
})
export class AlbumComponent {
    id: string;
    album: Album[];

    constructor(private _spotifyService: SpotifyService,
        private _route: ActivatedRoute) {

    }

    ngOnInit(): void {
        this._route.params
            .map(params => params['id'])
            .subscribe((id) => {
                this._spotifyService.getAlbum(id)
                    .subscribe(album => {
                        this.album = album;
                    });
            });
    }
}
