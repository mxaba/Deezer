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
  constructor(private router: ActivatedRoute, public api: DeezerApiServicesService) { }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.getTopTracks(id)
    this.getArtitDetails(id)
    this.getAlbums(id)
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
