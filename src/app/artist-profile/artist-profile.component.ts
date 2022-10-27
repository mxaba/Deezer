import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeezerApiServicesService } from '../services/deezer-api-services.service';

@Component({
  selector: 'app-artist-profile',
  templateUrl: './artist-profile.component.html',
  styleUrls: ['./artist-profile.component.scss']
})
export class ArtistProfileComponent implements OnInit {
  albums: any;
  currentArtist: any
  topTracks: any
  id: number = 0;
  constructor(private router: ActivatedRoute, public api: DeezerApiServicesService) { }

  ngOnInit(): void {
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    this.getTopTracks(this.id)
    this.getArtitDetails(this.id)
    this.getAlbums(this.id)
  }

  getArtistsByNameSearch(event: string): any {
    if(event == ""){
      this.getAlbums(this.id)
      return
    }

    this.api.getSearchByAlbum(event).subscribe((res: any) => {
      this.albums = res.body.data
    })
  }

  getArtitDetails(id: number): any {
    this.api.getArtitDetails(id).subscribe((res: any) => {
      this.currentArtist = res.body;
    })
  }

  getTopTracks(id: number): any {
    this.api.getTopTracks(id).subscribe((res: any) => {
      this.topTracks = res.body.data;
    })
  }

  getAlbums(id: number): any {
    this.api.getAlbums(id).subscribe((res: any) => {
      this.albums = res.body.data;
    })
  }

}
