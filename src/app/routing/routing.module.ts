import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from '../countries/countries.component';
import { CountryDetailComponent } from '../country-detail/country-detail.component';

const routes: Routes = [
  { path: 'countries', component: CountriesComponent },
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'detail/:id', component: CountryDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
