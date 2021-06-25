import { Component, OnInit } from '@angular/core';

// Model
import { AlbumModel } from '../../models/album.model';

// Service
import { AlbumsService } from '../../services/albums.service';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss'],
  providers: [AlbumsService]
})
export class AlbumComponent implements OnInit {

    albums: AlbumModel[];

    constructor(private albumsService: AlbumsService) { }

    getAlbums(): void {
      this.albumsService.getAlbums()
        .subscribe(albums => this.albums = albums)
    }

    ngOnInit() {
      this.getAlbums()
    }

}
