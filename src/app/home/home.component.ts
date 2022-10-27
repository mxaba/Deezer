import { Component, OnInit } from '@angular/core';
import { DeezerApiServicesService } from '../services/deezer-api-services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchText = '';
  toArtists: any;
  constructor(public api: DeezerApiServicesService) { }

  ngOnInit(): void {
    this.getTopArtistsDetails()
  }

  getTopArtistsDetails(): any {
    console.log("ahdvsadcs")
    this.api.getTopArtistsDetails().subscribe((res: any) => {
      this.toArtists = res.body.data
      this.toArtists.forEach((elem: { id: number; nb_fan: ""}) => {
        this.api.getArtitDetails(elem.id).subscribe((res: any) => {
          elem["nb_fan"] = res.body["nb_fan"]
        })
      });
    })

    console.log("this.toArtists   ", this.toArtists)
  }

}
