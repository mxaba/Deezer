import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArtistProfileComponent } from './artist-profile/artist-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'basic-info/:id', component: ArtistProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
