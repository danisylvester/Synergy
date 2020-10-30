import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { DOCUMENT} from '@angular/common';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneMaskDirective } from './phone-mask.directive';
import { NavColoredComponent } from './nav-colored/nav-colored.component';

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
    AdditionalServicesComponent,
    PhoneMaskDirective,
    NavColoredComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  exports: [
    PhoneMaskDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
