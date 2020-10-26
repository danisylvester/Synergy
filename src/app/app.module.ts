import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WhoServeComponent } from './who-serve/who-serve.component';
import { HomeServicesComponent } from './home-services/home-services.component';
import { FooterComponent } from './footer/footer.component';
import { SingleServicesComponent } from './single-services/single-services.component';
import { MonthlyServicesComponent } from './monthly-services/monthly-services.component';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    WhoServeComponent,
    HomeServicesComponent,
    FooterComponent,
    SingleServicesComponent,
    MonthlyServicesComponent,
    AdditionalServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
