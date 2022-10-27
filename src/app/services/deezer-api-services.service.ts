import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Config } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DeezerApiServicesService {

  deezer: string = 'https://api.deezer.com/';

  constructor(private httpClient: HttpClient) { }

  getArtitDetails(id: number): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>(`/${this.deezer}artist/${id}`, { observe: 'response' });
  }

  getTopTracks(id: number): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>(`/${this.deezer}artist/${id}/top`, { observe: 'response' });
  }

  getAlbums(id: number): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>(`/${this.deezer}artist/${id}/albums`, { observe: 'response' });
  }

  getArtistByNameSearch(namePassed: string): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>(`/${this.deezer}search/artist?q=:$${namePassed}`, { observe: 'response' });
  }

  getSearchByAlbum(namePassed: string): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>(`/${this.deezer}search/album?q=:$${namePassed}`, { observe: 'response' });
  }

  getTopArtistsDetails(): Observable<HttpResponse<Config>> {
    return this.httpClient.get<Config>(`/${this.deezer}chart/O/artists`, { observe: 'response' });
  }
}
