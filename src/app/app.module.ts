import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KatranComponent } from './katran/katran.component';
import { PunjabimComponent } from './punjabim/punjabim.component';
import { LasunComponent } from './lasun/lasun.component';
import { SinglemariComponent } from './singlemari/singlemari.component';
import { MoongComponent } from './moong/moong.component';
import { RajwadiComponent } from './rajwadi/rajwadi.component';
import { JeeramComponent } from './jeeram/jeeram.component';
import { ChanaComponent } from './chana/chana.component';
import { MethiComponent } from './methi/methi.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AngularanimationComponent } from './angularanimation/angularanimation.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    KatranComponent,
    PunjabimComponent,
    LasunComponent,
    SinglemariComponent,
    MoongComponent,
    RajwadiComponent,
    JeeramComponent,
    ChanaComponent,
    MethiComponent,
    ContactusComponent,
    HomeComponent,
    AngularanimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
