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
import { AdminComponent } from './admin/admin.component';
import { SignInComponent } from './sign-in/sign-in.component';

const clientsRoutes: Routes = [
  {path:'', component:ClientsServicesComponent},
  {path:'clients-rates', component:ClientRatesComponent},
  {path:'clients-info', component:InfoComponent}
];

const servicesRoutes: Routes = [
  {path:'clients-services', component:ClientsServicesComponent},
  {path:'business-services', component: BusinessServicesComponent},
  {path:'', redirectTo:'clients-services', pathMatch:'full'},
];

const businessRoutes: Routes = [
  {path:'', component:BusinessServicesComponent},
  {path:'business-rates', component: BuisenessRatesComponent}
];

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch:'full'},
  {path:'about', component: AboutComponent},
  {path:'business', component: BusinessComponent, children:businessRoutes},
  {path:'clients', component:ClientsComponent, children:clientsRoutes},
  {path:'contacts', component:ContactsComponent},
  {path:'full-info', component:FullInfoComponent},
  {path:'ref-book', component:ReferenceBookComponent},
  {path:'services', component:WaterServicesComponent, children: servicesRoutes},
  {path:'sign-in', component:SignInComponent},
  {path:'admin', component:AdminComponent},
  {path:'**', redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
