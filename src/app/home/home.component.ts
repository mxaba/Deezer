import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DeezerApiServicesService } from '../services/deezer-api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  artists: any[] = [];
  namePassed = '';
  id: any;
  constructor(public api: DeezerApiServicesService, private router: Router) { }

  ngOnInit(): void {
    this.getTopArtistsDetails()
  }

  getArtistsByNameSearch(event: string): any {

    this.api.getArtistByNameSearch(event).subscribe((res: any) => {
      this.artists = res.body.data
    })
  }

  getTopArtistsDetails(): any {
    this.api.getTopArtistsDetails().subscribe((res: any) => {
      this.artists = res.body.data
      this.artists.forEach((elem: { id: number; nb_fan: ""}) => {
        this.api.getArtitDetails(elem.id).subscribe((res: any) => {
          elem["nb_fan"] = res.body["nb_fan"]
        })
      });
    })
  }

  route(event: any) {
    this.router.navigate([`basic-info/${event?.value}`])
  }

}
