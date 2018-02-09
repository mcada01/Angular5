import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from './app.routing';

//Componentes
import { AppComponent } from './app.component';
import { TiendaComponent } from '../app/components/tienda/tienda.component';
import { ParquesComponent } from '../app/components/parques/parques.component';
import { AnimalsComponent } from '../app/components/animals/animals.component';
import { ContactComponent } from '../app/components/contact/contact.component';
import { HomeComponent } from '../app/components/home/home.component';
import { KeepersComponent } from '../app/components/keepers/keepers.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    HomeComponent,
    KeepersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
