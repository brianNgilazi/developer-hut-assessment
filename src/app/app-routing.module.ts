import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent, title: 'Page Not Found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
