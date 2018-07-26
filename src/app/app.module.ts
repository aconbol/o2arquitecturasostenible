import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavegacionComponent } from './shared/navegacion/navegacion.component';
import { AboutComponent } from './shared/about/about.component';
import { ServicesComponent } from './shared/services/services.component';
import { TeamComponent } from './shared/team/team.component';
import { PortfolioComponent } from './shared/portfolio/portfolio.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ClientsComponent } from './shared/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavegacionComponent,
    AboutComponent,
    ServicesComponent,
    TeamComponent,
    PortfolioComponent,
    FooterComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
