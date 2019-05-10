import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BusinessComponent } from './business/business.component';
import { BusinessServicesComponent } from './business-services/business-services.component';
import { BuisenessRatesComponent } from './buiseness-rates/buiseness-rates.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientsServicesComponent } from './clients-services/clients-services.component';
import { ClientRatesComponent } from './client-rates/client-rates.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FullInfoComponent } from './full-info/full-info.component';
import { InfoComponent } from './info/info.component';
import { ReferenceBookComponent } from './reference-book/reference-book.component';
import { WaterServicesComponent } from './water-services/water-services.component';

// const clientsRoutes: Routes = [
//   {path:'services', component:ServicesComponent},
//   {path:'clients-rates', component:ClientRatesComponent},
//   {path:'clients-info', component:InfoComponent},
//   {path:'ref-book', component:ReferenceBookComponent}
// ];

const servicesRoutes: Routes = [
  {path:'clients-services', component:ClientsServicesComponent},
  {path:'business-services', component: BusinessServicesComponent}
];

// const businessRoutes: Routes = [
//   {path:'services', component:ServicesComponent},
//   {path:'business-rates', component: BuisenessRatesComponent},
//   {path:'ref-book', component:ReferenceBookComponent}
// ];

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path:'about', component: AboutComponent},
  {path:'business', component: BusinessComponent},
  //{path:'business-services', component: BusinessServicesComponent},
  {path:'business-rates', component: BuisenessRatesComponent},
  {path:'clients', component:ClientsComponent},
  //{path:'clients-services', component:ClientsServicesComponent},
  {path:'clients-rates', component:ClientRatesComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'full-info', component:FullInfoComponent},
  {path:'clients-info', component:InfoComponent},
  {path:'ref-book', component:ReferenceBookComponent},
  {path:'water-services', component:WaterServicesComponent, children: servicesRoutes}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
