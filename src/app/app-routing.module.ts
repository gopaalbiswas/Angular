import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'product', component: ProductComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'contact', component: ContactComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],

  imports: [ 
    RouterModule.forRoot(routes) 
  ],
})

export class AppRoutingModule { }